import React, {useState} from 'react';
import "./Login.css";

const Login = () => {
    const [formValues, setFormValues] = useState({email:"",password:""});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues,[name]:value})
    }

    const login = () => {
        console.log(formValues);
    }    

    return (
        <>
            <div className="container">
                <div className="login-container">
                    <div className="title">Login</div>
                        <div className="email">
                            <div className="email-label">
                                <label id="email"><p>Email</p></label>
                            </div>
                            <div className="email-input">
                                <input type="text" placeholder="Email" name="email"
                                       value={formValues.email} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="password">
                            <div className="password-label">
                                <label id="password"><p>Password</p></label>
                            </div>
                            <div className="password-input">
                                <input type="text" placeholder="Password" name="password"
                                       value={formValues.password} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="submit">
                            <button type="submit" onClick={login}>Login</button>
                        </div>
                </div>
            </div>
        </>
    );
}
export default Login;