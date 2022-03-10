import React, {useState} from 'react'
import './Card.css'
import { FaCamera } from "react-icons/fa";
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

function Card() {
    const [name, setName] = useState ('Mark');
    const [about, setabout] = useState ('Quality of time')

  return (
    <div className='Card'>
      <div className='upper-container'>
        <div className="image-container">
          <img className="profile-pic" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt='' />
          <span className='upload-button'><FaCamera /></span>
            <input className="file-upload" type="file" accept="image/*" />
        </div>
        {/* <div className='image-container'>
            <img src='https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg' alt="" height="100px" width= "100px" />
        </div> */}
        <div className='lower-container'>
            <h3>{name}</h3>
            <button className='button'>{name} 's Love Language:<br /> {about}</button>
        </div>
      </div>
    </div>
  )
}

export default Card