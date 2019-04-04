import React from 'react';

const toolTip = (props) => {
    return (
        <div className="tooltip" style={props.translateValue}>  
            <div className="tooltip-cube"></div> 
            <p>קטע מסויים שצריך להיכנס פה</p>
            <p>קטע מסויים שצריך להיכנס פה</p>
            <p>קטע מסויים שצריך להיכנס פה</p>
            <p>קטע מסויים שצריך להיכנס פה</p>
            <p>קטע מסויים שצריך להיכנס פה</p>
            <p>קטע מסויים שצריך להיכנס פה</p>
            
        </div>
    );
}

export default toolTip;