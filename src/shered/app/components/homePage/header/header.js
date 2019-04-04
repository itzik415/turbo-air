import React from 'react';
import Navbar from './navbar/navbar';
import MainContent from './mainContent/mainContent';

const header = (props) => {
    return (
        <div className="header" style={props.translateValue}>  
            <Navbar />
            <MainContent />
        </div>
    );
}

export default header;