// Renders the resume form as the user is filling in the form.
// this is meant as a 'preview' so they can see how 
// the information is going to be laid out.


import React from "react";

class PreviewResume extends React.Component {
    render() {
        return (
            <div className="preview">
                <div>Name: {this.props.firstName + ' ' + this.props.lastName}</div>
                <div>!!!@#: {this.props.phoneNum + ' ' + this.props.emailAdd}</div>
            </div>
        );
    }
}
  


export default PreviewResume;