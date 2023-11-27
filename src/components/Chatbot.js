import './Chatbot.css';
import ChatbotImg from '../assets/icons/chatbot.svg';

const Chatbot = () => {
    return(
        <>
            <div className='chatbot-container'>
                <img src={ChatbotImg} alt="chatbot"/>
            </div>
        </>
    );
}
export default Chatbot;
