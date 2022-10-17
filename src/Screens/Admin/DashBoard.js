import style from "./dashboard.module.css"
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button, IconButton, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import { DeleteForever } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios";
import swal from "sweetalert";
const DashBoard = () => {
  const [open, setOpen] = useState(false)
  const [Question, setQuestion] = useState("")
  const [Answer1, setAnswer1] = useState("")
  const [Answer2, setAnswer2] = useState("")
  const [Answer3, setAnswer3] = useState("")
  const [Answer4, setAnswer4] = useState("")
  const [displayField, setDisplay] = useState(false)
  const [CorrectAnswer, setCorrectAnswer] = useState("")
  const [Time, setTime] = useState("")  
  const [category, setCategory] = useState("");
  const [Quiz, setQuiz] = useState([])


  useEffect(() => {

    axios.get("http://localhost:4000/quiz/getQuiz").then((result) => {
      setQuiz(result?.data?.quiz)
    }).catch((err) => {
      console.log(err?.response?.data)
    })

  }, [])


  const categories = [
    "Html",
    "CSS",
    "JavaScript",
    "React",
    "NodeJs"
  ];


  const handleClose = () => setOpen(false)
  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    height:"80vmin",
    bgcolor: 'rgb(0, 2, 109)',
    border: '2px solid transparent',
    boxShadow: 24,
    overflow:"auto",  
    color: "white",
    margin:"auto"
  };


  const addQuiz = () => {

if (Question && Answer1 && Answer2 && Answer3 && Answer4 && CorrectAnswer  && Time && category) {
    axios.post("http://localhost:4000/quiz/AddQuiz ", {
      "question": Question, "option": [Answer1, Answer2, Answer3, Answer4],
      "CorrectAnswer": CorrectAnswer, "course": category, "time": Time
    }).then((result) => { 
        swal({text:"Question Has been Created"})
        setOpen(false)
        axios.get("http://localhost:4000/quiz/getQuiz").then((result) => {
          setQuiz(result?.data?.quiz)
        }).catch((err) => {
          console.log(err?.response?.data)
        })
    }).catch((err) => {
      console.log(err?.response?.data)
    })

  }else{
    swal({text:"Fill All The Field"})
  }
  
  
  }





  const columns = [
    { field: "id", headerName: "Question Id", minWidth: 200, flex: 0.5 },
    {
      field: "course",
      headerName: "Course",
      minWidth: 100,
      flex: 0.3,
    },
    {
      field: "questions",
      headerName: "Questions",
      minWidth: 200,
      flex: 0.4,
    },
    {
      field: "timing",
      headerName: "Timing",
      minWidth: 60,
      flex: 0.1,
      type:"number"
    },
    {
      field: "action",
      headerName: "Actions",
      type:"number",
      minWidth: 150,
      flex: 0.3,
      sortable: false,
      renderCell: (params) => (
        <IconButton onClick={() =>{ 
          axios.delete(`http://localhost:4000/quiz/deleteQuiz/${params.getValue(params.id, "id")}`).then((result) => {
            swal({text:result?.data?.msg})
            axios.get("http://localhost:4000/quiz/getQuiz").then((result) => {
              setQuiz(result?.data?.quiz)
            })
          }).catch((err) => {
            console.log(err?.response?.data)
          });
        }}>
          <DeleteForever />
        </IconButton>
      )
    },
  ];

  const rows = [];
  Quiz && Quiz.forEach((item) => {
    rows.push({
      id: item._id,
      course: item.course,
      questions: item.question,
      timing: item.time 

    })
  })


  return (

    <div>
      <div className={style.NavContainer}>
        <div>
          <h3>Admin DashBoard</h3>
        </div>

        <div>
          <Button startIcon={<AddIcon />} onClick={() => setOpen(true)}>
            Add Quiz Question
          </Button>
        </div>
      </div>

      <Modal sx={{overflow:"auto"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={style.modal}
      >
        <Box sx={styles}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center",marginTop:"12px"}}>
            Add Quiz
          </Typography>



          <select className={style.select} value={category} onChange={(e) => setCategory(e.target.value)}>
            <option className={style.option} value="">Choose Category</option>
            {categories.map((cate) => (
              <option className={style.option} key={cate} value={cate}>
                {cate}
              </option>
            ))}
          </select>

          <input placeholder='Quiz Question' className={style.QuizQuestion} value={Question} onChange={e => setQuestion(e.target.value)} />

          <div className={style.answerContainer}>
            <input placeholder='Quiz Options 1' value={Answer1} onChange={e => setAnswer1(e.target.value)} />
            <input placeholder='Quiz Options 2' value={Answer2} onChange={e => setAnswer2(e.target.value)} />
            <input placeholder='Quiz Options 3' value={Answer3} onChange={e => setAnswer3(e.target.value)} />
            <input placeholder='Quiz Options 4' value={Answer4} onChange={e => setAnswer4(e.target.value)} />
            <input placeholder='Time in Second' type={"number"} value={Time} onChange={e => setTime(e.target.value)} />

          </div>


          <Typography id="modal-modal-title" variant="p" component="p">
            Answer</Typography>
          <br />

          <Button startIcon={<CheckIcon />} variant="contained" color="success" onClick={() => { setDisplay(displayField === true ? false : true) }}>True</Button>
          <br />
          <input placeholder='Correct Answer' className={style.QuizQuestion} value={CorrectAnswer} onChange={e => setCorrectAnswer(e.target.value)} style={{ display: displayField === true ? "block" : "none" }} />
          <br />

          <Button onClick={() => { setOpen(false) }} variant="contained" color="error">Cancel</Button>
          <Button variant="contained" color="secondary" onClick={addQuiz}>Save</Button>


        </Box>
      </Modal>



      <div className={style.TableContainer}>


        <div style={{ width: "90%", margin: "auto" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className={style.StudentDashboard}
            autoHeight
          />
        </div>



      </div>




    </div>

  )
}

export default DashBoard