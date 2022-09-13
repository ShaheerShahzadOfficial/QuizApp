import React, { useState } from 'react'
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
const SignIn = () => {
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    return (
        <div className='mainDiv'>
            <div style={{ paddingTop: "5vmax" }} />
            <div className='SignUpFormContainer'>
                <h2>LogIn</h2>

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
            
                    <button> Log In</button>
                </div>






            </div>

            <div style={{ paddingTop: "5vmax" }} />
        </div>
    )
}

export default SignIn
