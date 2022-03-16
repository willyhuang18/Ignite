import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './footer.css'

const Footer = () => {
  const location = useLocation();
  return (
    <footer className=" footer mt-5 ">
      <div className="container text-center mb-5 header">
        {location.pathname !== '/' && (
          <div className='d-inline-block'>
            <span >&larr; Go Back</span>
            <div className="liquid"></div>
          </div>
        )}
        <div>
          <h1 class="heading"> Ignite <span>Ignite Your{' '}❤️
            With The One</span>
          </h1>
        </div>
        <div class="container">
          <p>© Copyright 2022 Ignite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
