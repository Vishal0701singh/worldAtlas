import React from 'react';
import './Contact.css';

export default function Contact() {
  const handleFormSubmit = (formData) => {

    const inputData = Object.fromEntries(formData.entries());
    console.log(inputData);
  }
  return (
    <div className=' flex colomn center commonMrgin contactf'>
      <h1>Contact us</h1>
      <form action={handleFormSubmit} className='flex colomn contactform'>
        <input className='inputfield inputWidth iptHeight' name='userName' type="text" placeholder='Enter your name' required autoComplete='false' />
        <input className='inputfield inputWidth iptHeight' name='email' type="email" placeholder='Enter your email' required autoComplete='false' />
        <textarea className='inputfield inputWidth' name="message" id="msg" required autoComplete='false' rows="10" placeholder='Write your message'></textarea>
        <button className='btn' type='submit'>Send</button>
      </form>
    </div>
  );
}
