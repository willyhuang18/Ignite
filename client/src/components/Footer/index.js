import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './footer.css'
import {FaFacebookSquare, FaTwitter,FaGithub} from 'react-icons/fa'


const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 ">
      <div className="container text-center mb-5 header">
        {location.pathname !== '/' && (
          <div className='d-inline-block'>
            <a href={undefined} type="button" className=" btn p-1 m-1 text-light" onClick={() => navigate(-1)}>
            <span >&larr; Go Back</span>
                <div className="liquid"></div>
              </a>
          </div>
        )}
        <div>
          <h1 class="heading"> Ignite <span>Ignite Your{' '}❤️
            With The One</span> 
          </h1>
        </div>
        <div class="container">
          <FaFacebookSquare className='m-2 fs-3' />
          <FaGithub className='m-2 fs-3' />
          <FaTwitter className='m-2 fs-3'/>
          <p>© Copyright 2022 Ignite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
