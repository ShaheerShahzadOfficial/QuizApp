import { useEffect, useState } from 'react'
import style from "./signup.module.css"
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import swal from 'sweetalert';

import { useNavigate } from 'react-router-dom';
import { Register } from '../../Redux/Actions/Auth';
import { useDispatch, useSelector } from 'react-redux';

const SignUp = () => {
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    const router = useNavigate()

const dispatch = useDispatch()

const {msg,error,user} = useSelector(state => state.Auth)




useEffect(() => {
  
  if (user?.role === "Student") {
    router("/Student/Home") 
   }else if (user?.role === "Admin") {
     router("/Admin/Dashboard")
   }else if (user?.role === "SuperAdmin"){
     router("/SuperAdmin/dashboard")
   }
 
}, [router, user?.role])


function signup() {
    if(Name && Password && Email){
      
dispatch(Register(Name,Email,Password))

if (msg) {
        swal({text:msg,icon:"success", buttons:"Ok!"})
}

if (error) {
if (error?.msg === "You Are Already a User") {
    swal({text:"You Are Already a User",icon:"error"})
    
}
console.log(error)
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
        <div className={style.mainDiv}>
            {/* <div style={{ paddingTop: "5vmax" }} /> */}
            <div className={style.SignUpFormContainer}>
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



                <div className={style.btn}>
                    {/* <ArrowForwardIcon /> */}
                    <button onClick={signup}> SignUp</button>
                </div>


                <div className={style.Redirect}>
    <p style={{cursor:"pointer"}} onClick={()=> router("/login")}> Already have an account!
        <span>Login</span>
    </p>
</div>



            </div>

<div className={style.left}>
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
