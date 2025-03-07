import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/minilogo.png';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import SearchBox from './SearchBox';
import { resetCart } from '../slices/cartSlice';

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            dispatch(resetCart());
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    };

    const itemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

    return (
        <header className="header">
            <Navbar bg="dark" expand="lg" collapseOnSelect variant="dark" className="custom-navbar">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img src={logo} width="60" alt="Lo clothing store" />
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <SearchBox />
                            {/* Fix: Change "/products" to "/product" */}
                            <LinkContainer to="/products">
                                <Nav.Link style={{ color: 'yellow' }}>Products</Nav.Link>
                            </LinkContainer>
                            {/* Show Contact Us and About Us only if user is not signed in */}
                            {!userInfo && (
                                <>
                                    <LinkContainer to="/contact-us">
                                        <Nav.Link>Contact Us</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/about-us">
                                        <Nav.Link style={{ color: 'yellow' }}>About Us</Nav.Link>
                                    </LinkContainer>
                                </>
                            )}
                            {/* Show Cart only if user is signed in */}
                            {userInfo && (
                                <LinkContainer to="/cart">
                                    <Nav.Link>
                                        <FaShoppingCart /> Cart
                                        {cartItems.length > 0 && (
                                            <Badge pill bg="success" style={{ marginLeft: '5px' }}>
                                                {itemsCount}
                                            </Badge>
                                        )}
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id="username">
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link>
                                        <FaUser /> Sign In
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title="Admin Menu" id="adminmenu">
                                    <LinkContainer to="/admin/productlist">
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/admin/userlist">
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/admin/orderlist">
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;