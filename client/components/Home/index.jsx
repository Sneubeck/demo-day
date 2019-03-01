import React from 'react'
import ReactDOM from 'react-dom';
import Image from '../Image';

const Home = () => {
  return (
    <section className='component-home'>
      <div className="home-container">
        <div className="heading">
          <h1>Shelby Neubeck</h1>
        </div>
        <div className="row face">
          <Image src='/me.jpg' circular />
        </div>
        <div className="rows row-content-container"> 
          <div className="intro row"> 
            <h2>About</h2>
            <p>I've lived an eclectic life; born into a military family that often relocated, I grew up with travel in my veins. My nomadic upbringing led to a thirst for life. Constantly surrounded by new people, surroundings, and (often enough) regional cultures, I am constantly refining myself to adjust to new situations and people. I learned to make friends and keep them after I have long since moved away. What began as a simple necessity to form meaningful relationships in a short time period became an avid interest in communications, marketing, and technology. My early life helped foster a primal need to experience life to its fullest. A thirst for knowledge and new experiences led me to diversify my interests into many fields, with hobbies that include tabletop gaming, video games, all manner of sports (both professional and collegiate), and writing.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
