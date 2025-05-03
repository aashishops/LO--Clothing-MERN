import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { useProfileMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { useGetMyOrdersQuery } from '../slices/ordersApiSlice'; 
import { FaTimes } from 'react-icons/fa';//for showing icon for X


const ProfileScreen = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // navigate('/login');
    
    //get auth part from the state
    const {userInfo} = useSelector((state) => state.auth)
    

    useEffect(() => {
        //if user is logged in, redirect to redirect
        // navigate('/login?redirect=/shipping')
        if(userInfo) { 
            setName(userInfo.name)
            setEmail(userInfo.email)
        }
      }, [userInfo, userInfo.name, userInfo.email])//pass in the dependencies
    
    const [updateProfile, {isLoading: loadingUpdateProfile}] 
        = useProfileMutation()//usersApiSlice
    
    const {data: orders, isLoading, error} = useGetMyOrdersQuery()
    console.log(orders)  
    
    const submitHandler = async (e) => {
        e.preventDefault()
        
        if(password !== confirmPassword){
            toast.error('Passwords do not match')
            //return
        } else {
            try {
                    //call updateProfile mutation with name/email/pw from state, unwrap the resolved value
                   const res = await updateProfile({_id: userInfo._id, 
                        name, email, password}).unwrap();
                   //setCredential will set localStorage to spread values of res as userInfo
                   dispatch(setCredentials(res))
                   toast.success('Profile updated successfully')
                   navigate('/')
                } catch (err) {
                //    toast.error(err?.data?.message || err.error)
                toast.error('Please logout, and sign in again to update your profile')  
            }
        }
    }  

  return (
    <Row>
        {/* for user data */}
        <Col md={3}>
            <h2>User Profile</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name' className='my-2 fw-bold'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='bg-warning'
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='email' className='my-2 fw-bold'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='bg-warning'
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                    
                <Form.Group controlId='password' className='my-2 fw-bold'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='bg-warning'
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword' className='my-2 fw-bold'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control className='bg-warning'
                        type='password'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='my-2 fw-bold'
                    onClick={submitHandler}>
                    Update
                </Button>

                {loadingUpdateProfile && <Loader />}
                
            </Form>
        </Col>
        
        {/* for user orders history */}

    </Row>
  )
}

export default ProfileScreen