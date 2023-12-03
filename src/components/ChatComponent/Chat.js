import React, {useEffect, useRef,useState} from 'react';
import './Chat.css';
import UserChat from './UserChat';
import ChatBotChat from './ChatBotChat';
import Message from './Message';

const Chat = () => {
  const scrollContainerRef = useRef(null);

  const [messages, setMessages] = useState([
    new Message(1, 'John Doe', 'User', 'Hello, how are you?'),
    new Message(2, 'ChatGPT', 'AI', 'I am doing well, thank you!'),
    new Message(3, 'John Doe', 'User', 'Hello, how are you?'),
    new Message(4, 'ChatGPT', 'AI', 'I am doing well, thank you!'),
    // Add more messages as needed
  ]);

  const [inputValue, setInputValue] = useState('');

  const addNewMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = new Message(messages.length + 1, 'John Doe', 'User', inputValue);
      setMessages([...messages, newMessage]);
      setInputValue(''); // Clear the input field after adding the message
    }
    console.log(messages);
  };


  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }, [messages]);

  return (
      <>
      <div className="container-chat">
              <div className="title">Ask Bot</div>
              <div className="box" ref={scrollContainerRef}>
                    {messages.map((message) => (
                        <div key={message.id}>
                            {message.role === 'AI' ? (
                              <ChatBotChat message={message} />
                            ) : (
                              <UserChat message={message} />
                            )}
                         </div>
                    ))}
          
              </div>

              <div className="typing-area">
                  <div className="input-field">
                      <input type="text" placeholder="Type your message" required
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      />
                      <button onClick={addNewMessage}>Send</button>
                  </div>
              </div>
      </div>    

    </>


  )
}

export default Chat;
