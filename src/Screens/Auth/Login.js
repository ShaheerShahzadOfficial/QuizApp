import style from './SignIn.module.css'
import EmailSharpIcon from '@mui/icons-material/EmailSharp'
import LockSharpIcon from '@mui/icons-material/LockSharp'
import {useEffect, useState } from 'react'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Login } from '../../Redux/Actions/Auth'

const SignIn = () => {
  const [Password, setPassword] = useState('')
  const [Email, setEmail] = useState('')
  const dispatch = useDispatch()
  const router = useNavigate()

  const {user,error} = useSelector(state => state.Auth)


useEffect(() => {
  
  if (user?.role === "Student") {
    router("/Student/Home") 
   }else if (user?.role === "Admin") {
     router("/Admin/Dashboard")
   }else if (user?.role === "SuperAdmin"){
     router("/SuperAdmin/dashboard")
   }
 
}, [router, user?.role])



  function login() {
    if (Password && Email) {
      dispatch(Login(Email,Password))
 
      console.log(user)
      if (user?.role === "Student") {
       router("/Student/Home") 
      }else if (user?.role === "Admin") {
        router("/Admin/Dashboard")
      }else{
        router("/SuperAdmin/dashboard")
      }

      if (error) {
        console.log(error)
      }

    } else {
      swal({
        text: 'Fill All The Field',
        icon: 'error',
        buttons: 'Sorry!',
      })
    }
  }
  return (
    <div className={style.mainDiv}>
      <div className={style.SignUpFormContainer}>
        <h2>Login To Your Account</h2>
        <br />
        <br />
        <div>
          <EmailSharpIcon />
          <input
            type={'email'}
            placeholder=" Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />

        <div>
          <LockSharpIcon />
          <input
            type={'password'}
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={style.btn}>
          {/* <ArrowForwardIcon /> */}
          <button onClick={login}> Login</button>
        </div>

        <div className={style.Redirect}>
          <p
            style={{ cursor: 'pointer' }}
            onClick={() => router('/')}
          >
            {` Don't`} have account! <span>Register</span>
          </p>
        </div>
      </div>

      <div className={style.left}>
        <div>
          <h1> Welcome Back! </h1>

          <h3>Login To Continue</h3>
        </div>
      </div>
    </div>
  )
}


export default SignIn