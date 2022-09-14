import "./SignIn.css"
import React, { useState } from 'react'
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import {useNavigate} from "react-router-dom"
import swal from "sweetalert";
import {useDispatch,useSelector} from "react-redux"
import { Login } from "../../../Redux/Actions/Auth";
const SignIn = () => {
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user} = useSelector(state => state.Auth)

    function login() {
        if(Password && Email){
            dispatch(Login(Email,Password))
            if (user?.token) {
                swal({
                    text:"Login Successfull",
                    icon:"success",
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

<div className='SignUpFormContainer'>
                <h2>Login To Your Account</h2>
                <br />
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
                    <button onClick={login}> Login</button>
                </div>



<div className="Redirect">
    <p style={{cursor:"pointer"}} onClick={()=> navigate("/")}> Don't have account!
        <span>Register</span>
    </p>
</div>


            </div>




<div className='left'>
<div>
<h1> Welcome Back! </h1>

<h3>Login To Continue</h3>
</div>
</div>

        </div>
    )
}

export default SignIn
