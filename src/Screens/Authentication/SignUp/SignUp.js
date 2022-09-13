import React, { useState } from 'react'
import "./signup.css"
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
const SignUp = () => {
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    return (
        <div className='mainDiv'>
            <div style={{ paddingTop: "5vmax" }} />
            <div className='SignUpFormContainer'>
                <h2>Register User</h2>
                <br />

                <div>
                    <FaceSharpIcon />
                    <input type={"text"} placeholder="Name" value={Name} onChange={e => setName(e.target.value)} />
                </div>
                <br />
                <div>
                    <EmailSharpIcon />
                    <input type={"email"} placeholder=" Email" value={Email} onChange={e => setEmail(e.target.value)} />
                </div>
                <br />

                <div>
                    <LockSharpIcon />
                    <input type={"password"} placeholder="Password" value={Password} onChange={e => setPassword(e.target.value)} />
                </div>

<div> <p> Forgot Password ? </p> </div>

                <div className='btn'>
                    {/* <ArrowForwardIcon /> */}
                    <button> SignUp</button>
                </div>






            </div>

            <div style={{ paddingTop: "5vmax" }} />
        </div>
    )
}

export default SignUp
