import React, { useState, useEffect } from "react";
import './message.css'

const Message = (props) => {
    const { message } = props
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 8000); // The message will disappear after 2 seconds
      return () => clearTimeout(timer);
    }, [message]);
  
    return (
      <div className={`message-popup ${visible ? 'visible' : ''}`}>
        <p>{message}</p>
      </div>
    );
};

export default Message;