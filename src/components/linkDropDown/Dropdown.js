import React from "react";
import './index.css'
const Dropdown = (props) => {
    const { visible } = props
  
    return (
      <div className={`nav-popup ${visible ? 'visible' : ''}`}>
        <p>Hey!</p>
      </div>
    );
};

export default Dropdown;