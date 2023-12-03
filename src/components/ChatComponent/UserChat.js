import React from 'react';
import './UserChat.css'

const UserChat = (props) => {
    var message = '';
    if (props) {
        message = props.message.message;
    }
    return (
        <div className="user">
                <div className="usericon">
                    <i className="fa fa-user"/>
                </div>
                <div className="userMessage">
                    <p>{message}</p>
                </div>
            </div>
    )
}

export default UserChat
