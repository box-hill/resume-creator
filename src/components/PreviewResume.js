// Renders the resume form as the user is filling in the form.
// This is meant as a 'preview' so users can see how 
// the resume is going to be laid out.


import React from "react";

function returnList(listName){
    console.log(listName);
    return (
        <ul>
            {listName.map((item) => {
            return <li key={item.id}> {item.text}</li>
            })}
        </ul>
    )
}


class PreviewResume extends React.Component {
    
    render() {
        const { 
            firstName, lastName, summary, skills, githubLink, phoneNum, emailAdd, awards, educations
        } = this.props;
        return (
            <div className="resume">
                <div className='left-column'>
                    <div className='resume-personal-info'>
                        <div>
                            <span className="first-letter">{firstName.charAt(0)}</span>
                            <span>{firstName.slice(1,firstName.length) + ' '}</span>
                            <span className="first-letter">{lastName.charAt(0)}</span>
                            <span>{lastName.slice(1,lastName.length)}</span>
                        </div>

                        
                        <div>Phone Number: {phoneNum}</div>
                        <div>Email: {emailAdd}</div>
                        {githubLink.length === 0 ? null :<div>
                            <a href={githubLink} target="blank">Github</a>
                        </div>
                        }
                    </div>

                    <div className='resume-academic-info'>
                        <div>Awards: </div>
                        {returnList(awards)}                   
                    </div>
                </div>
                
                <div className='right-column'>
                    <div className='resume-summary'>{summary}</div>
                    <div className='resume-skills'>Skills: </div>
                    {returnList(skills)}
                </div>

            </div>
        );
    }
}
  


export default PreviewResume;