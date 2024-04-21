import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <article className='footerContainer'>
      <div className='footer'>
        <p>Evolve - Copyright © 2024. All rights reserved. Ready to create your next course? <a className='footerLink' href='/'>Sign up today!</a>
            <br></br>
            Developed by <a className='footerLink' href='https://github.com/Tonyrealzy'>Umehobi Arinze</a>. To learn more about us, click <a className='footerLink' href='https://github.com/Tonyrealzy/Course-Management-App'>here.</a>
            <br></br>
            <br></br>
            Follow us on social media for learning tips!
            <br></br>
            Github: <a className='footerLink' href='https://github.com/Tonyrealzy'>https://github.com/Tonyrealzy</a>
            <br></br>
            LinkedIn: <a className='footerLink' href='https://www.linkedin.com/in/arinzeumehobi'>https://www.linkedin.com/in/arinzeumehobi</a>
        </p>

        <section className='footerBottom'>
            <p className='footLink' onClick={() => {navigate('/')}}>Help Center</p>
            <p className='footLink' onClick={() => {navigate('/')}}>Terms of Service</p>
            <p className='footLink' onClick={() => {navigate('/')}}>Privacy Policy</p>
        </section>
      </div>
    </article>
    
  )
}

export default Footer