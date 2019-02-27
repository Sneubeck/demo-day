import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Resume from './components/Resume';
import Home from './components/Home';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="main-container">
      <Router className='component-router'>
        <div>
          <Header navigation={<Navigation />} />
          <main>
            <Route exact path='/' component={Home} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />
          </main>
          <Footer social={[{
            name: 'facebook',
            icon: 'fa-facebook fa-2x',
            url: 'http://facebook.com/Shoobles'
          },{
            name: 'instagram',
            icon: 'fa-instagram fa-2x',
            url: 'http://instagram.com/shoobear'
          },{
            name: 'linkedin',
            icon: 'fa-linkedin fa-2x',
            url: 'https://www.linkedin.com/in/shelbyneubeck'
          },
          ]} />
        </div>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('.react-container'),
);
