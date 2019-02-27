import React from 'react'
import ReactDOM from 'react-dom';

class Footer extends React.Component {
  render() {

    return (
      <div className='component-footer'>
        <div className='footer-row-container'>
          <div className='footer-social'>
            {this.props.social.map((item, i) => {
              return <a className="social-item" href={item.url} key={i}>
                <i className={`fab ${item.icon}`} />
              </a>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
