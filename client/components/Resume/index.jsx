import React from 'react'
import ReactDOM from 'react-dom';

const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

class ResumeEducation extends React.Component {
  constructor() {
    super();
  }
  render() {
    const startAt = Date.parse(this.props.startAt);
    const startAtDate = new Date(startAt);

    const endAt = Date.parse(this.props.endAt);
    const endAtDate = new Date(endAt);
    return (
      <div className={`education-container ${this.props.className} ${this.props.slug}`}>
        <div className='education-icon'>
          
        </div>
        <div className='education-content'>
          <h3>{this.props.name}</h3>
          <h4>{this.props.fieldOfStudy}</h4>
          <div className='content' dangerouslySetInnerHTML={{__html: this.props.description}}></div>
        </div>
      </div>
    );
  }
}

class ResumeWork extends React.Component {
  constructor() {
    super();
  }
  render() {
    const startAt = Date.parse(this.props.startAt);
    const startAtDate = new Date(startAt);

    const endAt = Date.parse(this.props.endAt);
    const endAtDate = new Date(endAt);
    return (
      <div className={`work-container ${this.props.className} ${this.props.slug}`}>
        <div className='work-icon'>
          
        </div>
        <div className='work-content'>
          <h3>{this.props.name}</h3>
          <div><span>Started: </span><span>{`${months[startAtDate.getMonth()]} ${startAtDate.getFullYear()}`}</span></div>
          <div style={{display: this.props.endAt ? 'inline' : 'none' }}><span>Ended: </span><span>{`${months[endAtDate.getMonth()]} ${endAtDate.getFullYear()}`}</span></div>
          <div className='content' dangerouslySetInnerHTML={{__html: this.props.description}}></div>
        </div>
      </div>
    );
  }
}

class ResumeProject extends React.Component {
  constructor() {
    super();
  }
  render() {
    const startAt = Date.parse(this.props.startAt);
    const startAtDate = new Date(startAt);
    return (
      <div className={`project-container ${this.props.className} ${this.props.slug}`}>
        <div className='project-icon'>
          
        </div>
        <div className='project-content'>
          <h3>{this.props.name}</h3>
          <div><span>Started: </span><span>{`${months[startAtDate.getMonth()]} ${startAtDate.getFullYear()}`}</span></div>
          <div style={{display: this.props.endAt ? 'inline' : 'none' }}><span>Ended: </span><span>{`${months[endAtDate.getMonth()]} ${endAtDate.getFullYear()}`}</span></div>
          <div className='content' dangerouslySetInnerHTML={{__html: this.props.description}}></div>
        </div>
      </div>
    );
  }
}

class ResumeSkill extends React.Component {
  render() {
    return (
      <span className={`skill ${this.props.slug}`}>{this.props.name}</span>
    );
  }
}

class Resume extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [],
      education: [],
      work: [],
      projects: [],
    };
  }

  componentDidMount() {
    fetch('/api/resume')
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({
        skills: data.skills,
        education: data.education,
        projects: data.projects,
        work: data.work,
      });
    });
  }

  render() {
    return (
      <section className='component-resume'>
        <div className="resume-container">
          <h2>Resume</h2>
        </div>
        <div className="resume-container">
          <h3>Skills</h3>
          <div className="skills resume-container">
            {this.state.skills.map((item, i) => {
              return (
                <ResumeSkill key={i} name={item.name} slug={item.slug} startAt={item.startAt} endAt={item.endAt} />
              )
            })}
          </div>
        </div>
        <div className="education resume-container">
          <h3>Education</h3>
        {this.state.education.map((item, i) => {
          return (
            <ResumeEducation fieldOfStudy={item.fieldOfStudy} description={item.description} key={i} name={item.name} slug={item.slug} startAt={item.startAt} endAt={item.endAt} />
          )
        })}
        </div>
        <div className="work resume-container">
          <h3>Work History</h3>
        {this.state.work.map((item, i) => {
          return (
            <ResumeWork key={i} name={item.name} startAt={item.startAt} endAt={item.endAt}  slug={item.slug} description={item.description} />
          )
        })}
        </div>
        <div className="projects resume-container" style={{display: this.state.projects.length ? 'flex' : 'none' }}>
          <h3>Projects</h3>
        {this.state.projects.map((item, i) => {
          return (
            <ResumeProject key={i} name={item.name} startAt={item.startAt} endAt={item.endAt} slug={item.slug} />
          )
        })}
        </div>
      </section>
    );
  }
};

export default Resume;
