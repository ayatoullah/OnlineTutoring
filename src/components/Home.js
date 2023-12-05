import CourseData from './CourseComponent/CourseData';
import Header from "./Header.js";
import Dashboard from "../views/Dashboard.js";
import Chatbot from "./Chatbot.js";
import CourseParticipants from './CourseComponent/CourseParticipants';
import Course from '../views/Course.js';
import Chat from './ChatComponent/Chat.js';
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute.js";
import { useState } from 'react';

const Home = () => {
    const [divVisible, setDivVisible] = useState(false);
    const handleToggleClick = () => {
      setDivVisible(!divVisible);
    };

    return (
        <>
             <Header />
                <Routes>
                    <Route exact path='/' element={<PrivateRoute/>}>
                            <Route path="" component={<Dashboard />} />
                    </Route>
                    <Route exact path='/' element={<PrivateRoute/>}>
                        <Route path="courses" element={<Course />}>
                            <Route index element={<CourseData />} />
                            <Route path="coursedata" element={<CourseData/>}/>
                            <Route path="participants" element={<CourseParticipants/>} />
                        </Route>
                    </Route>
                </Routes>

                <div onClick={handleToggleClick}>
                    <Chatbot/>
                </div>
                {divVisible && (
                    <div><Chat/></div>
                )}
        </>

    )
}
export default Home;