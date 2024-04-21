import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className='navBar'>
        <span className='logo'>Evolve</span>
        <section className='navLinkCol'>
            {/* <Link to={"/"}> */}
            <button className='navLink'>Home</button>
            {/* </Link> */}
            <button className='navLink'>Courses</button>
            <button className='navLink'>FAQs</button>
        </section>
        <section>
        <input className='navSearch' placeholder='Search Evolve'/>
        <button className='navLogin'>Log in</button>
        </section>
    </div>
  )
}

export default Navbar