import styles from './name.module.css'
import React, { useEffect, useState } from 'react'
import { Button, LinearProgress, Paper } from '@mui/material'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Name = () => {
  const { name } = useParams()
  const [QuestionNo, setQuestionNo] = useState(0)
  var totalTime = 3
  const [seconds, setSeconds] = useState(0)
  const [arr, setArr] = useState([])
const [newArray, setNewArray] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:4000/quiz/getQuizByCategories/${name}`, {
        withCredentials: true,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      })
      .then((result) => {
        console.table(result.data)
        setArr(result.data?.quiz)
      })
      .catch((err) => {
        console.table(err?.response?.data)
      })
  }, [name])


  useEffect(() => {
    arr.length < QuestionNo
      ? console.log('quiz ended')
      : seconds <= totalTime
      ? setTimeout(() => {
          setSeconds(seconds + 1)
        }, 1000)
      : setTimeout(
          () =>
            setQuestionNo(
              QuestionNo === arr.length ? QuestionNo : QuestionNo + 1,
            ),
          setSeconds(0),
          0,
        )
  }, [QuestionNo, arr, arr.length, seconds, totalTime])

  const style = [
    {
      padding: '1vmax',
      fontWeight: 'bolder',
      fontSize: '1vmax',
    },
  ]

  let array = []
  QuestionNo < arr.length &&
  array.push({
    question: arr[QuestionNo]?.question,
    option1: arr[QuestionNo]?.option[0],
    option2: arr[QuestionNo]?.option[1],
    option3: arr[QuestionNo]?.option[2],
    option4: arr[QuestionNo]?.option[3],
  })
  totalTime = arr[QuestionNo]?.time

setNewArray([{
  question: arr[QuestionNo]?.question,
},...newArray,])

console.log(newArray,"===============>>>>>>>>>>>>>>>","newArray");


  return (
    <div>
      <div className={styles.NavBar}>
        <Paper
          variant="elevation"
          elevation={6}
          sx={{ padding: '0.1vmax', textAlign: 'center' }}
        >
          <h2
            style={{
              fontSize: '2vmax',
              fontWeight: 'bolder',
              fontFamily: 'Roboto',
            }}
          >
            Quiz For {name}{' '}
          </h2>

          <h3>00 : {seconds}</h3>
        </Paper>
      </div>

      {arr.length <= QuestionNo ? (
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Paper
            variant="elevation"
            elevation={10}
            sx={{
              width: '80%',
              margin: ' 1vmax auto 2vmax auto',
              padding: '1vmax',
            }}
          >
            <h2
              style={{
                fontSize: '2.4vmax',
                fontWeight: 'bolder',
                fontFamily: 'Roboto',
                textAlign: 'center',
              }}
            >
              Quiz Ended
            </h2>

            <h2
              style={{
                fontSize: '2.4vmax',
                fontWeight: 'bolder',
                fontFamily: 'Roboto',
                textAlign: 'center',
              }}
            >
              you pass/fail the quiz
            </h2>
          </Paper>
        </div>
      ) : (
        <div>
          <Paper
            variant="elevation"
            elevation={10}
            sx={{
              width: '80%',
              margin: ' 1vmax auto 2vmax auto',
              padding: '1vmax',
            }}
          >
            <LinearProgress
              variant="determinate"
              value={(seconds / totalTime) * 100}
              sx={{ padding: '0.5vmax', margin: 'auto' }}
            />

            <br />
            <h2
              style={{
                fontSize: '2.4vmax',
                fontWeight: 'bolder',
                fontFamily: 'Roboto',
              }}
            >
              Question {QuestionNo + 1}
            </h2>
            {array.map((item, i) => (
              <div key={i}>
                <h3
                  style={{
                    fontSize: '2vmax',
                    fontWeight: 'bolder',
                    fontFamily: 'Roboto',
                  }}
                >
                  {item.question}
                </h3>
                <div className={styles.OptionsContainer}>
                  <Button variant="contained" color="success" sx={style}>
                    {item.option1}
                  </Button>
                  <Button variant="contained" color="success" sx={style}>
                    {item.option2}
                  </Button>
                  <Button variant="contained" color="success" sx={style}>
                    {item.option3}
                  </Button>
                  <Button variant="contained" color="success" sx={style}>
                    {item.option4}
                  </Button>
                </div>
              </div>
            ))}

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                margin: 'auto',
                width: '100%',
              }}
            >
              <div style={{ margin: 'auto' }}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    padding: '1vmax',
                    fontWeight: 'bolder',
                    fontSize: '1.3vmax',
                    width: '10vmax',
                  }}
                  disabled={QuestionNo + 1 === 1 ? true : false}
                >
                  Back
                </Button>
              </div>

              <div style={{ margin: 'auto' }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    padding: '1vmax',
                    fontWeight: 'bolder',
                    fontSize: '1.3vmax',
                    width: '10vmax',
                  }}
                  onClick={() => setQuestionNo(QuestionNo + 1)}
                  disabled={QuestionNo + 1 === arr.length ? true : false}
                >
                  Next
                </Button>
              </div>
            </div>
          </Paper>
        </div>
      )}
    </div>
  )
}

export default Name
