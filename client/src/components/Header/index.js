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
    <div className="flex-column bg mb-5">
          {Auth.loggedIn() ? (
              <nav className="navbar sticky-top">
                  <div className="container-fluid header">
                      <div className="flame">
                        <h1><span className='span'><img src={logo} alt="fire-heart" className='fire'/>Ignite</span></h1>
                      </div>
                      <div className="d-flex">
                      <Link to="/" type="button" className=" m-1 text-light" aria-current="page"><span> Homepage</span>
                          <div className="liquid"></div>
                      </Link>
                      <Link to="/" id="logout" className="m-1 text-light" type="submit" onClick={logout}><span> Log out</span>
                          <div className="liquid"></div>
                      </Link>
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
                        <Link to="/signup" type="button" className=" btn text-light" aria-current="page" ><span> Sign up</span>
                            <div className="liquid"></div>
                        </Link>
                        <Link to="/login" className=" btn text-light"  ><span> Log In</span>
                            <div className="liquid"></div>
                        </Link>
                        
                        </div>
                    </div>
                </div>
                )}
    </div>
  );
};

export default Header;
