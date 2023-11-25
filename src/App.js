import './App.css';
import CourseData from './CourseView/CourseData';
import CourseParticipants from './CourseView/CourseParticipants';
import Courses from './CourseView/Courses';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="courses" element={<Courses />}>
            <Route index element={<CourseData />} />
            <Route path="coursedata" element={<CourseData/>}/>
            <Route path="participants" element={<CourseParticipants/>} />
        </Route>
      </Routes>
  
    </BrowserRouter> 
  );
}

export default App;
