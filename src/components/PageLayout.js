import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const PageLayout = ({ children }) => {
  return (
    <>
    <Navbar/>

    <main className='main'>
        {children}
    </main>
    
    <Footer/>
    </>
  )
}

export default PageLayout