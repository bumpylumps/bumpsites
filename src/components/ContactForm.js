import React from 'react'

const ContactForm = () => {
  return (
    <>
        <h4>Name</h4>
        <input type="text" name="name" placeholder="Name" />
        <h4>Email</h4>
        <input type="text" name="email" placeholder="Email" />
        <h4>Subject</h4>
        <input type="text" name="subject" placeholder="Subject" />
        <h4>Message</h4>
        <textarea name="message" placeholder="Message" rows="7"></textarea>
        <input type="submit" class="special" value="Send Message" />
    </>
  )
}

export default ContactForm
