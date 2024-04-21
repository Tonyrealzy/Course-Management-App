import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import NavToggle from './NavToggle';

const PageLayout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <section className='navbarContainer'>
    <Navbar isOpen={isOpen} onToggle={toggleNavbar}/>
    <NavToggle isOpen={isOpen} onToggle={toggleNavbar}/>
    </section>

    <main className='main'>
        {children}
    </main>
    
    <div className='backdrop' onClick={toggleNavbar}/>
    <Footer/>
    </>
  )
}

export default PageLayout