import {Link, useNavigate} from 'react-router-dom'
import React, { useEffect } from 'react'
import style from './home.module.css'
import { useDispatch } from 'react-redux'
import { Logout } from '../../Redux/Actions/Auth'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {


      window.addEventListener("beforeunload", async function (e) {
      dispatch(Logout())
      navigate("/login")
      })
  }, [dispatch, navigate])




  const subject = [
    { Name: 'Html', Trainers: 4 },
    { Name: 'CSS', Trainers: 4 },
    { Name: 'JavaScript', Trainers: 4 },
    { Name: 'React', Trainers: 4 },
    { Name: 'Node js', Trainers: 4 },
  ]

  return (
    <div>
      <h1 className={style.Studentheading}>WELCOME STUDENT</h1>

      <br />

      <div className={style.Courses}>
        {subject.map((item, i) => (
          <div key={item.Name}>
            <div style={{ width: '90%', margin: 'auto' }}>
              <h4
                style={{
                  fontSize: '2.5vmax',
                  marginTop: 0,
                  marginBottom: '0.5rem',
                }}
              >
                {item.Name}
              </h4>
              <h6
                style={{
                  color: '#10266b',
                  fontSize: '2vmax',
                  fontWeight: 500,
                  lineHeight: 1,
                }}
              >
                {item.Trainers} Trainers
              </h6>
              <Link to={`/Student/StartQuiz/${item.Name}`}>
                <button
                  style={{
                    color: '#10266b',
                    width: '100%',
                    border: '2px solid #10266b',
                    padding: '1vmax',
                    margin: 'auto',
                    backgroundColor: 'white',
                    fontSize: '2vmax',
                    fontWeight: 200,
                  }}
                >
                  Join Test
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
