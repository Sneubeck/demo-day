import React from 'react'
import ReactDOM from 'react-dom';

const Contact = () => {
  return (
    <form className='component-contact'>
      <div className="input-group">
        <h2>Send me a message!</h2>
        <p>Shelby Lee Neubeck</p>
      </div>
      <div className="input-group">
        <label>Name</label>
        <input name="name" className="" />
      </div>
      <div className="input-group">
        <label>Subject</label>
        <input name="subject" className="" />
      </div>
      <div className="input-group">
        <label>Message</label>
        <textarea name="message" className="" />
      </div>
      <div className="input-group submit">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default Contact;
