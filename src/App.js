import './App.css';
import CourseData from './components/CourseComponent/CourseData';
import Header from "./components/Header.js";
import Dashboard from "./views/Dashboard.js";
import Chatbot from "./components/Chatbot.js";
import CourseParticipants from './components/CourseComponent/CourseParticipants';
import Courses from './views/Course.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
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
      <Chatbot />
    </div>
  );
}

export default App;
