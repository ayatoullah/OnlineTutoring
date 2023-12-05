import { createContext, useState, useContext } from "react";
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Login from './LoginComponent/Login';
import PrivateRoute from "./PrivateRoute";

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


    return (
        <AuthContext.Provider value={{userData, login, logout}}>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="" element={<PrivateRoute/>}>
                    <Route path="" element={<Home/>}/>
                </Route>
            </Routes>
        </AuthContext.Provider>
    );
}
export default AuthWrapper;