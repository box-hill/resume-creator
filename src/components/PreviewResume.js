// Renders the resume form as the user is filling in the form.
// This is meant as a 'preview' so users can see how 
// the resume is going to be laid out before they save it as a pdf

import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLink, faEnvelope, faPhoneAlt, faSchool, faTrophy, faBriefcase, faCode, faUser} from '@fortawesome/free-solid-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

function resumeHeading(text, divider, faIcon = undefined){
    return (
        <div className='resume-heading'>
            <div>{text} <FontAwesomeIcon icon={faIcon}/></div>
            <div className={divider}></div>
            
        </div>
    )
}

function returnList(listName){
    if(listName.length === 0) return;
    return (
        <ul>
            {listName.map((item) => {
            return <li key={item.id}> {item.text}</li>
            })}
        </ul>
    )
}

function returnEducationList(listName){
    return (
        <div>
            {listName.map((item) => {
                return ( <div key={item.id} className='resume-education-list'> 
                    <div className='degree'>{item.degree} </div> 
                    <div className='institution'>{item.institution}</div>
                    <div className='date'>{item.educationStart} — {item.educationEnd}</div>
                </div>)
            })}
        </div>
    )
}

function returnWorkList(listName){
    return (
        <div>
            {listName.map((item,index) => {
                return ( <div key={item.id} className='resume-work-list'> 
                    <div className='jobTitle'>{item.jobTitle}</div>
                    <div className='company'>{item.company} </div> 
                    <div className='date'>{item.workStart} — {item.workEnd}</div>
                    <div className='des'>{item.workDes}</div>
                </div>)
            })}
        </div>
    )
}


class PreviewResume extends React.Component {
    
    render() {
        const { 
            firstName, lastName, summary, skills, githubLink, portfolioLink, phoneNum, emailAdd, 
            awards, education, work } = this.props;
        return (
            <div className="resume">
                <div className='left-column'>
                    <div className='resume-personal-info'>
                        <div className="resume-name">
                            <div>
                                <span className="first-letter">{firstName.charAt(0)}</span>
                                <span>{firstName.slice(1,firstName.length) + ' '}</span>
                            </div>
                            <div>
                                <span className="first-letter">{lastName.charAt(0)}</span>
                                <span>{lastName.slice(1,lastName.length)}</span>
                            </div>
                            
                        </div>
                        
                        <div className="resume-details">
                            <div><FontAwesomeIcon icon={faPhoneAlt} /> {phoneNum}</div>
                            <div><FontAwesomeIcon icon={faEnvelope} /> {emailAdd}</div>
                            {githubLink.length === 0 ? null :<div>
                                <a href={githubLink} target="blank"><FontAwesomeIcon icon={faGithub}/>Github</a>
                                
                            </div>
                            }
                            {portfolioLink.length === 0 ? null :<div>
                                <a href={portfolioLink} target="blank"><FontAwesomeIcon icon={faLink}/>Portfolio</a>
                                
                            </div>
                            } 
                        </div>
                    </div>

                    <div className='resume-academic-info'>
                        <div>
                            {resumeHeading('EDUCATION', 'soft-divider-short', faSchool)}
                            {returnEducationList(education)}
                        </div>
                        <div>
                            {resumeHeading('AWARDS', 'soft-divider-short', faTrophy)}
                            {returnList(awards)}                   
                        </div>
                    </div>
                </div>
                
                <div className='right-column'>
                    <div className='resume-summary'>
                        {resumeHeading('PROFILE', 'soft-divider-long', faUser)}
                        
                        <div className='resume-summary-content'>{summary}</div>
                    </div>

                    <div className='resume-experience-skills'>
                        <div>
                            {resumeHeading('WORK HISTORY', 'soft-divider-long', faBriefcase)}
                            {returnWorkList(work)}
                        </div>
                        <div className='resume-skills'>
                            {resumeHeading('SKILLS', 'soft-divider-long', faCode)}
                            {returnList(skills)}
                        </div>
                    </div>           
                </div>

            </div>
        );
    }
}
  


export default PreviewResume;