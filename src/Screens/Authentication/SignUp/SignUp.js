import React, { useState } from 'react'
import "./signup.css"
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import {useNavigate} from "react-router-dom"
const SignUp = () => {
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const navigate = useNavigate()
    return (
        <div className='mainDiv'>
            {/* <div style={{ paddingTop: "5vmax" }} /> */}
            <div className='SignUpFormContainer'>
                <h2>Registeration</h2>
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



                <div className='btn'>
                    {/* <ArrowForwardIcon /> */}
                    <button> SignUp</button>
                </div>


                <div className="Redirect">
    <p style={{cursor:"pointer"}} onClick={()=> navigate("/login")}> Already have an account!
        <span>Login</span>
    </p>
</div>



            </div>

<div className='left'>
<div>
<h1> Glad to see you! </h1>

<h3>Register Yourself To Continue</h3>
</div>
</div>

            {/* <div style={{ paddingTop: "5vmax" }} /> */}
        </div>
    )
}

export default SignUp
