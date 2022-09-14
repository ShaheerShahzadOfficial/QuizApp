import React, { useState } from 'react'
import "./signup.css"
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import {useNavigate} from "react-router-dom"
import swal from 'sweetalert';
import {useDispatch,useSelector} from "react-redux"
import { Register } from "../../../Redux/Actions/Auth";
const SignUp = () => {
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {isAuthenticated,error} = useSelector(state => state.Auth)

function signup() {
    if(Name && Password && Email){
        dispatch(Register(Name,Email,Password)) 
        if (isAuthenticated) {
            swal({
                text:"Registration Successfull",
                icon:"success",
             })        
            }

if (error?.msg === " User Already Exist with this Email ") {
    swal({
        text:"You Are Already Registered",
        icon:"warning",
     })   
}


    }else{
     swal({
        text:"Fill All The Field",
        icon:"error",
        buttons:"Sorry!",
     })
    }
}


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
                    <button onClick={signup}> SignUp</button>
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
