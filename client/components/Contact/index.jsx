import React from 'react'
import ReactDOM from 'react-dom';
import Recaptcha from 'react-google-recaptcha';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      verified: false,
      success: false,
      error: '',
      name: {
        error: '',
        value: '',
      },
      email: {
        error: '',
        value: '',
      },
      subject: {
        error: '',
        value: '',
      },
      message: {
        error: '',
        value: '',
      },
    };
  }

  handleVerify(res) {
    this.setState({verified: true});
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = new URLSearchParams();
    if(this.state.verified != true) {
      this.setState({
        error: 'Please complete the captcha.',
      });
      return;
    }

    for (let key in this.state) {
        data.append(key, this.state[key].value);
    }

    fetch('/api/contact', {
      method: 'POST',
      body: data,
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
      }
    }).then((res) => {
      if(res.ok) {
        let state = this.state;
        state.success = true
        this.setState(state);
      } else {
        let state = this.state;
        state.error = "That didn't work. Make sure all of the fields are completed and try again!";
        this.setState(state);
      }
    });
  }

  handleNameChange(event) {
    const name = event.target.value;
    let error = '';
    if(name.length <= 0) {
      error = "Name can not be empty.";
    }

    let state = this.state;
    state.name = {
      value: name,
      error: error,
    };
    this.setState(state);
  }
  handleEmailChange(event) {
    const email = event.target.value;
    let  error = '';
    if(email.indexOf('@') == -1) {
      error = "Email must be a valid email address";
    }
    if(email.length <= 0) {
      error = "Email can not be empty.";
    }

    let state = this.state;
    state.email = {
      value: email,
      error: error,
    };
    this.setState(state);
  }
  handleSubjectChange(event) {
    const subject = event.target.value;
    let  error = '';
    if(subject.length <= 0) {
      error = "Subject can not be empty.";
    }
    let state = this.state;
    state.subject = {
      value: subject,
      error: error,
    };
    this.setState(state);
  }
  handleMessageChange(event) {
    const message = event.target.value;
    let  error = '';
    if(message.length <= 0) {
      error = "message can not be empty.";
    }
    let state = this.state;
    state.message = {
      value: message,
      error: error,
    };
    this.setState(state);
  }

  render() {
    return (
      <form className='component-contact' onSubmit={this.handleSubmit.bind(this)}>
        <div className="input-group">
          <h2>Send me a message!</h2>
          <p>Shelby Lee Neubeck</p>
        </div>
        <div className="input-group success" style={{display: this.state.success ? 'block' : 'none'}}>
          <p>Thank you for your submission! I will get back to you as soon as possible.</p>
        </div>
        <div className="input-group errors">
          <span>{this.state.error}</span>
        </div>
        <div className={`input-group ${this.state.name.error ? 'error' : ''}`}>
          <span className='error-inline'>{this.state.name.error}</span>
          <label>Name*</label>
          <input disabled={this.state.success} value={this.state.name.value} onChange={this.handleNameChange.bind(this)} name="name" className="" />
        </div>
        <div className={`input-group ${this.state.email.error ? 'error' : ''}`}>
          <span className='error-inline'>{this.state.email.error}</span>
          <label>Email*</label>
          <input disabled={this.state.success} value={this.state.email.value} onChange={this.handleEmailChange.bind(this)} name="email" className="" />
        </div>
        <div className={`input-group ${this.state.subject.error ? 'error' : ''}`}>
          <span className='error-inline'>{this.state.subject.error}</span>
          <label>Subject*</label>
          <input disabled={this.state.success} value={this.state.subject.value} onChange={this.handleSubjectChange.bind(this)} name="subject" className="" />
        </div>
        <div className={`input-group ${this.state.message.error ? 'error' : ''}`}>
          <span className='error-inline'>{this.state.message.error}</span>
          <label>Message*</label>
          <textarea disabled={this.state.success} value={this.state.message.value} onChange={this.handleMessageChange.bind(this)} name="message" className="" />
        </div>
        <div className={`input-group submit`}>
          <Recaptcha
            sitekey="6LeFb5QUAAAAAJUXQ_2qHhqbeodIXF9PoxPXeP_l"
            onChange={this.handleVerify.bind(this)}
          />
          <button disabled={this.state.success} type="submit">Submit</button>
        </div>
      </form>
    );
  }
};

export default Contact;
