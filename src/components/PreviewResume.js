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
        const { firstName, lastName, skills, githubLink, phoneNum, emailAdd, awards} = this.props;
        return (
            <div className="preview">
                <div>
                    <span className="first-letter">{firstName.charAt(0)}</span>
                    <span>{firstName.slice(1,firstName.length) + ' '}</span>
                    <span>{lastName.charAt(0)}</span>
                    <span>{lastName.slice(1,lastName.length)}</span>                   
                </div>
                <div>Phone Number: {phoneNum}</div>
                <div>Email: {emailAdd}</div>
                {githubLink.length === 0 ? null :<div>
                    <a href={githubLink} target="blank">Github</a>
                </div>
                }
                <div>Skills: </div>
                {returnList(skills)}

                <div>Awards: </div>
                {returnList(awards)}

            </div>
        );
    }
}
  


export default PreviewResume;