import React from 'react';
import './ChatBotChat.css';
import chatBotImg from '../../assets/icons/chatBotIcon.svg'

const ChatBotChat = (props) => {
  var message = '';
  if (props) {
    message = props.message.message;
  }
  return (
    <div className="bot">
         <img src={chatBotImg} alt='chatbot' className="icon">
         </img>
         <div className="botMessage">
        <p>{ message}</p>
        </div>
    </div>
  )
}

export default ChatBotChat
