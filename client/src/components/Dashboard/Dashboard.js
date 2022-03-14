import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Modal, Button } from 'react-bootstrap';
import heart from '../../heart.png'
import { FaCamera } from "react-icons/fa";
import Questionnaire from '../Questionnaire/Questionnaire.js'
import QuestionOfTheDay from '../QuestionOfTheDay/QuestionOfTheDay';
import './Dashboard.css'
import Goals from '../Goals/Goals';
import $ from 'jquery'

$(document).ready(function() {

    
  var readURL = function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $('.profile-pic').attr('src', e.target.result);
          }
          reader.addEventListener('load', ()=>{
            localStorage.setItem('recent-image',reader.result)
          })
          reader.readAsDataURL(input.files[0]);
      }
  }
  
  $(".file-upload").on('change', function(){
      readURL(this); 
  });
  
  $(".upload-button").on('click', function() {
     $(".file-upload").click();
  });
  
  $(window).on("load",() =>{
    const recentImageDataUrl = localStorage.getItem('recent-image')
    
    if(recentImageDataUrl){
      $('.profile-pic').attr('src',recentImageDataUrl);
    }
  })
});
const Dashboard= () => {
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
                  A Couples App
                </h1>

                <div className='row '>
                  <div className="col-4 mx-5">
                    <div className="image-container ">
                      <img className="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt='' />
                      <span className='upload-button'><FaCamera /></span>
                      <input className="file-upload" type="file" accept="image/*" />
                    </div>
                    <div className='lower-container'>
                      
                          <h3 className='h3'>{Auth.getName().data.username}</h3>

                        <br />
                        <button className='button'>{Auth.getName().data.username} 's Love Language: <br /> </button>

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
                        <h3 className='h3'>{Auth.getName().data.username2}</h3>

                        <br />
                        <button className='button'>{Auth.getName().data.username2} 's Love Language: <br /> </button>

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
                  <div className='col-6'>
                    <div className='row' >
                     {/* <QuestionOfTheDay/> */}
                      {/* <img src={heart} alt='heart' /> */}
                      <h3 className='h3'>{Auth.getName().data.username} 's list </h3>
                      {/* <Goals/> */}
                    </div>
                    <div className="row">
                    <h3 className='h3'>{Auth.getName().data.username2} 's list </h3>
                      <Goals />
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