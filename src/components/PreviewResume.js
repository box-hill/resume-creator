// Renders the resume form as the user is filling in the form.
// this is meant as a 'preview' so they can see how 
// the information is going to be laid out.


import React from "react";


  
const PreviewResume = (props) => {
    const { name } = props;
    
    return (
        <div>Hey {name}!</div>
    );
};

export default PreviewResume;