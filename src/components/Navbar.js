import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isOpen }) => {
  const navigate = useNavigate();
  const classes = isOpen ? 'navbar-open' : 'navbar-closed';
  const searchIcon = (
    <svg viewBox="0 0 100 100" width="20" height="20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    </svg>
  );
  

  return (
    <nav className={classes}>
      <aside className='topNav'>
        <span className='logo'>Evolve</span>
        <div className='navBar'>
          <section className='navLinkCol'>
              <button onClick={() => navigate('/')} className='navLink'>Home</button>
              <button onClick={() => navigate('/courses')} className='navLink'>Courses</button>
              <button className='navLink'>FAQs</button>
          </section>
          
          <section className='navBar-right'>
            <aside className='searchContainer'>
              <span className='searchIcon'>{searchIcon}</span>
              <input className='navSearch' placeholder='Search Evolve'/>
            </aside>
            <button className='navLogin'>Log in</button>
          </section>
        </div>
      </aside>
    </nav>
  )
}

export default Navbar