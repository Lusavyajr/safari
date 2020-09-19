import React from 'react';
import './App.css';

function Contact() {
  return (
    <div className="img">
      <img src={require('./safari-zoo.jpg')} alt="mbuga" />

      <h2>Contact Us</h2>
      <div className="col-md-5">
            
            <div class="p-4 mb-3 bg-white">
              <p class="mb-0 font-weight-bold">Address</p>
              <p class="mb-4">255 Kibamba, Mbezi, Dar-Es-Salaam, Tanzania</p>

              <p class="mb-0 font-weight-bold">Phone</p>
              <p class="mb-4"><a href="#">+255 713 134 129</a></p>

              <p class="mb-0 font-weight-bold">Email Address</p>
              <p class="mb-0"><a href="#">amlusavya2020@gmail.com</a></p>

            </div>
      </div> 
      <div className="footer">safari@tz.com</div>     
    </div>
  );
}

export default Contact;
