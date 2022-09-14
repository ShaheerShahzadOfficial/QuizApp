import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import "./dashboard.css"
import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
const DashBoard = () => {
  const [open, setOpen] = useState(false)
const [Question, setQuestion] = useState("")
const [Answer1, setAnswer1] = useState("")
const [Answer2, setAnswer2] = useState("")
const [Answer3, setAnswer3] = useState("")
const [Answer4, setAnswer4] = useState("")
const [displayField, setDisplay] = useState(false)
const [CorrectAnswer, setCorrectAnswer] = useState("")


const [AnswerArray, setAnswerArray] = useState([Answer1,Answer2,Answer3,Answer4])
const [category, setCategory] = useState("");


const categories = [
 "Html",
 "CSS",
 "JavaScript",
 "React",
 "NodeJs"
];


const handleClose = () => setOpen(false)
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(0, 2, 109)',
  border: '2px solid transparent',
  boxShadow: 24,
  p: 4,
  color:"white"
};


// setAnswerArray([Answer1,Answer2,Answer3,Answer4])

  return (

<div>

<div className='NavContainer'>
<div>
<h3>Admin DashBoard</h3>
</div>

<div>
<Button startIcon={<AddIcon/>} onClick={()=>setOpen(true)}>
Add Quiz Question
</Button>
</div>
</div>

<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className={"modal"}
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Add Quiz
    </Typography>
    


    <select onChange={(e) => setCategory(e.target.value)}>
    <option value="">Choose Category</option>
    {categories.map((cate) => (
        <option key={cate} value={cate}>
            {cate}
        </option>
    ))}
</select>

<input placeholder='Quiz Question' value={Question} onChange={e => setQuestion(e.target.value)} />

<input placeholder='Quiz Answers1' value={Answer1} onChange={e => setAnswer1(e.target.value)} />
<input placeholder='Quiz Answers2' value={Answer2} onChange={e => setAnswer2(e.target.value)} />
<input placeholder='Quiz Answers3' value={Answer3} onChange={e => setAnswer3(e.target.value)} />
<input placeholder='Quiz Answers4' value={Answer4} onChange={e => setAnswer4(e.target.value)} />

<Typography id="modal-modal-title" variant="p" component="p">
Answer</Typography>
<br/>

<Button startIcon={<CheckIcon/>} variant="contained" color="success" onClick={ ()=> { setDisplay(displayField === true ? false : true) }}>True</Button>
<br/>
<input placeholder='Correct Answer' value={CorrectAnswer} onChange={e => setCorrectAnswer(e.target.value) }  style={{display:displayField === true ? "block" : "none"}} />
<br/>

<Button onClick={ ()=> { setOpen(false) }}  variant="contained" color="error">Cancel</Button>
<Button  variant="contained" color="secondary">Save</Button>


  </Box>
</Modal>



<div className='TableContainer'>

</div>




</div>

    )
}

export default DashBoard