import {Helmet} from 'react-helmet-async'
import favicon from '../assets/minilogo.png'

//input props for title, description and keywords
// const Meta = ({title, description, keywords, icon}) => {
 const Meta = ({title, description, keywords}) => {

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
    </Helmet>
  )
}

Meta.defaultProps = {
  
  title: 'Welcome to LO Clothing',
    description: 'Best Clothing Desing by Nanda ',
    keywords: 'electronics, cheap electronics, buy electronics',
}

export default Meta