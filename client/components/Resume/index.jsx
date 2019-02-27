import React from 'react'
import ReactDOM from 'react-dom';

class ResumeEducation extends React.Component {
  render() {
    return (
      <div className={`education ${this.props.slug}`}>{this.props.name}</div>
    );
  }
}

class ResumeWork extends React.Component {
  render() {
    return (
      <div className={`work-container ${this.props.className} ${this.props.slug}`}>
        <div className='work-icon'>
          
        </div>
        <div className='work-content'>
          <h3>{this.props.name}</h3>
          <span>Started:</span><span>{this.props.startAt}</span>
          <div className='content' dangerouslySetInnerHTML={{__html: this.props.description}}></div>
        </div>
      </div>
    );
  }
}

class ResumeProject extends React.Component {
  render() {
    return (
      <div className={`project ${this.props.slug}`}>{this.props.name}</div>
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
        <div className="skills resume-container">
        {this.state.skills.map((item, i) => {
          return (
            <ResumeSkill key={i} name={item.name} slug={item.slug} />
          )
        })}
        </div>
        <div className="education resume-container">
        {this.state.education.map((item, i) => {
          return (
            <ResumeEducation key={i} name={item.name} slug={item.slug} />
          )
        })}
        </div>
        <div className="work resume-container">
        {this.state.work.map((item, i) => {
          return (
            <ResumeWork key={i} name={item.name} startAt={item.startAt} stopAt={item.stopAt}  slug={item.slug} description={item.description} />
          )
        })}
        </div>
        <div className="projects resume-container">
        {this.state.projects.map((item, i) => {
          return (
            <ResumeProject key={i} name={item.name} startAt={item.startAt} stopAt={item.stopAt} slug={item.slug} />
          )
        })}
        </div>
      </section>
    );
  }
};

export default Resume;
