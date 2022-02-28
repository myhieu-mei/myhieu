import { useState } from 'react'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'

import './contact.scss'

export default function Contact() {
  const [message, setMessage] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setMessage(true)
    emailjs
      .sendForm(
        'service_g4lokna',
        'template_vip21qb',
        form.current,
        'N1QPDgBSs8d2f8_Jc'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src='assets/shake.svg' alt='' />
      </div>
      <div className='right'>
        <h1>Contact</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='user_name' placeholder='Name' />
          <input type='email' name='user_email' placeholder='Email' />
          <textarea name='message' placeholder='Message' />
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}
