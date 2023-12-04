import { createContext, useState, useContext } from "react";
import CourseData from './CourseComponent/CourseData';
import Header from "./Header.js";
import Dashboard from "../views/Dashboard.js";
import Chatbot from "./Chatbot.js";
import CourseParticipants from './CourseComponent/CourseParticipants';
import Course from '../views/Course.js';
import Chat from './ChatComponent/Chat.js';
import { Route, Routes } from "react-router-dom";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

const AuthWrapper = () => {
    
    const [userData, setUserData] = useState({"username":"", "isAuthenticated":false});

    const login = (username, password) => {

        return new Promise((resolve, reject)=> {
            //call api
            if(username === "username" && password === "password") {
                setUserData({"username":username, "isAuthenticated":true});
                resolve("success");
            } else {
                reject("email or password or both is incorrect");
            }
        })
    }

    const logout = () => {
        setUserData({...userData, "isAuthenticated":false});
    }

    const [divVisible, setDivVisible] = useState(false);
    const handleToggleClick = () => {
      setDivVisible(!divVisible);
    };

    return (
        <AuthContext.Provider value={{userData, login, logout}}>
            <>
                <Header />
                <Routes>
                <Route path="" element={<Dashboard />} />
                <Route path="courses" element={<Course />}>
                    <Route index element={<CourseData />} />
                    <Route path="coursedata" element={<CourseData/>}/>
                    <Route path="participants" element={<CourseParticipants/>} />
                </Route>
                </Routes>

                <div onClick={handleToggleClick}>
                    <Chatbot/>
                </div>
                {divVisible && (
                    <div><Chat/></div>
                )}
            </>
        </AuthContext.Provider>
    );
}
export default AuthWrapper;