// Renders the resume form as the user is filling in the form.
// This is meant as a 'preview' so users can see how 
// the resume is going to be laid out.


import React from "react";

class PreviewResume extends React.Component {

    render() {
        const { firstName, lastName, skills} = this.props;
        return (
            <div className="preview">
                <div>
                    <span className="first-letter">{firstName.charAt(0)}</span>
                    <span>{firstName.slice(1,firstName.length) + ' '}</span>
                    <span>{lastName.charAt(0)}</span>
                    <span>{lastName.slice(1,lastName.length)}</span>                   
                </div>
                <div>!!!@#: {this.props.phoneNum + ' ' + this.props.emailAdd}</div>
                <div>
                    <a href={this.props.githubLink} target="blank">Github</a>
                </div>
                <div>Skills: {this.props.skill.text}</div>
                <ul>
                    {skills.map((skill) => {
                    return (
                    <li key={skill.id}>
                        {skill.text}
                    </li>)
                    })}
                </ul>
            </div>
        );
    }
}
  


export default PreviewResume;