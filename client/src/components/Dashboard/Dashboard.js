import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Modal, Button } from 'react-bootstrap';
import heart from '../../heart.png'
import { FaCamera } from "react-icons/fa";
import Questionnaire from '../Questionnaire/Questionnaire.js'
import './Dashboard.css'

const Dashboard= () => {
  
  const [name, setName] = useState('Mark');
  const [showContent, setShowContent] = useState(false)

  // this will open the modal upon click
  const openModal = () => {
    setShowContent(true)
  }

  // this will close the modal upon click
  const closeModal = () => {
    setShowContent(false)
  }

  return (
    <>
      {Auth.loggedIn() ? (
        <>
          <div className='d-flex flex-row justify-content-between'>

            <div className='question'>
              <div className='upper-container '>
                <h1>Ignite
                  <br />
                  A couple App
                </h1>
                <div className='row '>
                  <div className="col-4 mx-5">
                    <div className="image-container">
                      <img className="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt='' />
                      <span className='upload-button'><FaCamera /></span>
                      <input className="file-upload" type="file" accept="image/*" />
                    </div>
                    <div className='lower-container'>
                      <div >
                        <h3>{name}</h3>
                        <br />
                        <button className='button'>{name} 's Love Language: <br /> </button>

                        {/* Questionnaire Modal */}
                        <button className='button mt-2' onClick={openModal}>Discover Your Love Language!</button>
                        <Modal show={showContent} onHide={closeModal} className="bg-light modal-questions">
                          <Modal.Header closeButton>
                            <Modal.Title>Discover Your Love Language</Modal.Title>
                          </Modal.Header>

                          <Modal.Body>
                            <Questionnaire />
                          </Modal.Body>
                        </Modal>

                      </div>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='px-5' >
                      <img src={heart} alt='heart' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
        </>
      )}
    </>
  );
};


export default Dashboard;