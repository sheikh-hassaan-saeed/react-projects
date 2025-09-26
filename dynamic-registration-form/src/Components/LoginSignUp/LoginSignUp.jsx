import React from 'react'
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useState } from 'react'

export const LoginSignUp = () => {

    const [Action, SetAction] = useState("Log In");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{Action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {Action === "Log In" ? <div></div> : <div className="input">
                    <img src={user_icon} />
                    <input type='text' alt='' placeholder='Name' />
                </div>}


                <div className="input">
                    <img src={email_icon} />
                    <input type='email' alt='' placeholder='Email ID' />
                </div>

                <div className="input">
                    <img src={password_icon} />
                    <input type='password' alt='' placeholder='Password' />
                </div>
            </div>

            <div className="forgot-password">Forgot Password? <span>Click Here</span></div>

            <div className="submit-container">
                <div className={Action === "Sign Up" ? "submit" : "submit gray"} onClick={() => SetAction("Sign Up")}>Sign Up</div>
                <div className={Action === "Log In" ? "submit" : "submit gray"} onClick={() => SetAction("Log In")}>Log In</div>
            </div>

        </div >
    )
}

export default LoginSignUp;
