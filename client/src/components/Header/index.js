import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import './header.css';
import logo from '../../fire-heart.gif'

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div className="flex-column ">
          {Auth.loggedIn() ? (
            <nav className="navbar sticky-top">
                <div className="container header">
                    <div className="flame">
                      <h1><span className='span'><img src={logo} alt="fire-heart" className='fire'/>Ignite</span></h1>
                    </div>
                    <div className="d-flex">
                    <a href="/" type="button" className=" m-1 text-light" aria-current="page"><span> Homepage</span>
                        <div className="liquid"></div>
                    </a>
                    <a href="#" id="logout" className="m-1 text-light" type="submit" onClick={logout}><span> Log out</span>
                        <div className="liquid"></div>
                    </a>
                    </div>
                </div>
            </nav>
          ) : (
                <div className="main header" id="main">
                    <div className="jumbotron start text-center">
                        <div className="flame">
                          <h1><span className='span'><img src={logo} alt="fire-heart" className='fire'/>Ignite</span></h1>
                        </div>
                        <div className='d-flex'>
                        <a href="/signup" type="button" className=" btn active  m-1 text-light" aria-current="page" ><span> Sign up</span>
                            <div className="liquid"></div>
                        </a>
                        <a href="/login" className=" btn text-light" type="submit" ><span> Log In</span>
                            <div className="liquid"></div>
                        </a>
                        </div>
                    </div>
                </div>
                )}
    </div>
  );
};

export default Header;
{/* <header className=" text-light mb-5 flex-row align-center" >
      <div className="container flex-row justify-space-between-lg justify-center align-center" >
          <div className="flame">
            <h1><span className='span'><img src={logo} alt="fire-heart" className='fire'/>Ignite</span></h1>
          </div>
        <div>
          {Auth.loggedIn() ? (
            <div className='header flex-row'>
            <a href="/me" type="button" className=" btn p-1 m-1 text-light" >
            <span > {Auth.getProfile().data.username}'s profile</span>
              <div className="liquid"></div>
            </a>
            <a href="#" type="button" className=" btn p-1 m-1 text-light" onClick={logout}><span>Log Out</span>
              <div className="liquid"></div>
            </a>
            </div>
            
          ) : (
            <div className='header flex-row'>
            <a href="/login" type="button" className=" btn p-1 m-1 text-light" ><span >Log In</span>
              <div className="liquid"></div>
            </a>
            <a href="/signup" type="button" className=" btn p-1 m-1 text-light"><span>Sign Up</span>
              <div className="liquid"></div>
            </a>
            </div>
          )}
        </div>
      </div>
    </header> */}