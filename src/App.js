import './App.css';
import CourseData from './components/CourseComponent/CourseData';
import Header from "./components/Header.js";
import Dashboard from "./views/Dashboard.js";
import Chatbot from "./components/Chatbot.js";
import CourseParticipants from './components/CourseComponent/CourseParticipants';
import Courses from './views/Course.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Chat from './components/ChatComponent/Chat.js';



function App() {

  const [isDivVisible, setDivVisibility] = useState(false);
  const handleToggleClick = () => {
      setDivVisibility(!isDivVisible);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="courses" element={<Courses />}>
              <Route index element={<CourseData />} />
              <Route path="coursedata" element={<CourseData/>}/>
              <Route path="participants" element={<CourseParticipants/>} />
          </Route>
        </Routes>
      </BrowserRouter> 

      <div onClick={handleToggleClick}>
        <Chatbot/>
      </div>
        {isDivVisible && (
          <div><Chat/></div>
        )}
    </div>
  );
}

export default App;
