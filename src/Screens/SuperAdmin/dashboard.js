import style from "../Admin/dashboard.module.css"
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import swal from "sweetalert";
import { AllUser } from "../../Redux/Actions/SuperAdmin";
import { useDispatch, useSelector } from "react-redux";
const SuperAdminDashboard = () => {
  const [open, setOpen] = useState(false)
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [Allowed, setAllowed] = useState("")
  const [Id, setId] = useState("")
  
  const handleClose = () => setOpen(false)

const dispatch = useDispatch()

  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'rgb(0, 2, 109)',
    border: '2px solid transparent',
    boxShadow: 24,
    p: 4,
    color: "white"
  };


useEffect(()=>{
dispatch(AllUser())
},[dispatch])


const {user} = useSelector(state => state.Users)

  const columns = [{ field: "id", headerName: "User Id", minWidth: 300, flex: 0.5 },
  {
    field: "role",
    headerName: "UserRole",
    minWidth: 150,
    flex: 0.3,
  },
  {
    field: "email",
    headerName: "Email",
    minWidth: 150,
    flex: 0.3,
  },
  {
    field: "name",
    headerName: "User Name",
    minWidth: 150,
    flex: 0.3,
  },
  {
    field: "allowed",
    headerName: "Allowed To Quiz",
    minWidth: 150,
    flex: 0.3,
  },
  {
    field: "action",
    headerName: "Actions",
    minWidth: 150,
    flex: 0.3,
    sortable: false,
    renderCell: (params) => (
      <>
      <IconButton
        onClick={() =>{ setOpen(true)  
        setId(params.getValue(params.id, "id"))
        setEmail(params.getValue(params.id, "email"))
        setName(params.getValue(params.id, "name"))
        setAllowed(params.getValue(params.id, "allowed")) 
        setRole(params.getValue(params.id, "role"))
        } }>
        <EditIcon />
      </IconButton>

      <IconButton onClick={()=>{
          axios.delete(`https://quizappbackendapi.herokuapp.com/superAdmin/deleteUser/${params.getValue(params.id, "id")}`,
          { withCredentials: true, credentials: "include", headers: { "Content-Type": "application/json" } }).then((result) => {
            console.log(result?.data?.msg)
            swal({text:result?.data?.msg})
            dispatch(AllUser())
          }).catch((err) => {
            console.log(err?.response)
          });
      }} >
<DeleteForever/>
      </IconButton>
      </>
    )
  },
  ];

  const rows = [];


  user ? user?.forEach(item => {
  rows.push({
    id: item._id,
    role: item.role,
    name: item.name,
    email:item.email,
    allowed:item.AlowedToAttemptQuiz
  })
}) :   
rows.push({
  id: "item._id",
  role: "item.role",
  name: "item.name",
  email:"item.email",
  AlowedToAttemptQuiz:"AlowedToAttemptQuiz"
})




const updateUser = () =>{
  axios.put(`https://quizappbackendapi.herokuapp.com/superAdmin/updateUser/${Id}`,{
    AlowedToAttemptQuiz:Allowed,role
  },
  { withCredentials: true, credentials: "include", headers: { "Content-Type": "application/json" } }).then((result) => {
    console.log(result?.data)
    setOpen(false)
    swal({text:result?.data?.msg})

    dispatch(AllUser())

   
  }).catch((err) => {
    console.log(err?.response)
  });
}







  return (
    <div>


      <h2 style={{ textAlign: "center", margin: "5vmax" }}> Welcome to Super Admin DashBoard </h2>

      <div style={{ width: "90%", margin: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          className="Student Dashboard"
          autoHeight
          // getRowId={(row) =>console.log(row.id)}
          />
      </div>

      <br />
      <div style={{ width: "90%", margin: "auto" }}>

      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={style.modal}
        >
          <Box sx={styles}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update User
            </Typography>

            <br />

            {/* <input placeholder='Email' className={style.QuizQuestion} value={Email} onChange={e => setEmail(e.target.value)} /> */}

            <div className={style.answerContainer}>
            <input placeholder='Email' value={Email} onChange={e => setEmail(e.target.value)} />

              <input placeholder='Name' value={Name} onChange={e => setName(e.target.value)} />
              <input placeholder='Allowed to Attempt Quiz' value={Allowed} onChange={e => setAllowed(e.target.value)} />
              <input placeholder='Role' value={role} onChange={e => setRole(e.target.value)} />
            </div>


            <br />



            <Button onClick={() => { setOpen(false) }} variant="contained" color="error">Cancel</Button>
            <Button variant="contained" color="secondary" onClick={updateUser}>Update</Button>


          </Box>
        </Modal>
      </div>

    </div>
  )
}

export default SuperAdminDashboard



