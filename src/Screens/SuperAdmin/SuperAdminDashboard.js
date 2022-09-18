import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector} from "react-redux"
import { AllUser } from '../../Redux/Actions/SuperAdmin'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

const SuperAdminDashboard = () => {
    const [open, setOpen] = useState(false)
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Batch, setBatch] = useState("")
    const [role, setRole] = useState("")
    const [Allowed, setAllowed] = useState("")
    
    const handleClose = () => setOpen(false)
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: "80%",
      bgcolor: 'rgb(0, 2, 109)',
      border: '2px solid transparent',
      boxShadow: 24,
      p: 4,
      color:"white"
    };
    
    const dispatch = useDispatch()
    useEffect(() => {
dispatch(AllUser())
    }, [dispatch])
    // ,error,loading
    const {user} = useSelector(state => state.Users)
    console.log(user)


    const columns = [{ field: "id", headerName: "User Id", minWidth: 300, flex: 0.5 },
    {
        field: "role",
        headerName: "UserRole",
        minWidth: 150,
        flex: 0.5,
    },
    {
        field: "name",
        headerName: "User Name",
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
             <IconButton 
             onClick={()=> setOpen(true)
              // alert(params.getValue(params.id, "id"))
             }>
             <Delete/>
             </IconButton>
        )
    },
    ];
  
    const rows = [];


//     user && user?.Users?.map((item,i)=>(
rows.push({
  id:"item._id",
  role:"item.role",
  name:"item.name"
})   
// )
//      ) 

  return (
    <div>

<h2 style={{textAlign:"center" ,margin:"5vmax"}}> Welcome to Super Admin DashBoard </h2>

<div style={{width:"90%",margin:"auto" }}>
    <DataGrid
    rows={rows}
    columns={columns}
    pageSize={10}
    disableSelectionOnClick
    className="Student Dashboard"
    autoHeight
/>
</div>

<br/>
<div style={{width:"90%",margin:"auto" }}>

{/* <Button  variant="contained" color="success" onClick={ ()=> { setOpen(true) }}>Save</Button> */}

</div>
<div>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  className={"modal"}
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Update User 
    </Typography>
    
    <br/>

<input placeholder='Email'  className='QuizQuestion' value={Email} onChange={e => setEmail(e.target.value)} />

<div className='answerContainer'>
<input placeholder='Name' value={Name} onChange={e => setName(e.target.value)} />
<input placeholder='Batch' value={Batch} onChange={e => setBatch(e.target.value)} />
<input placeholder='Allowed to Attempt Quiz' value={Allowed} onChange={e => setAllowed(e.target.value)} />
<input placeholder='Role' value={role} onChange={e => setRole(e.target.value)} />
</div>

{/* <input placeholder='Batch Number' className='QuizQuestion' type={"number"} value={Batch} onChange={e => setBatch(e.target.value)} /> */}




{/* <Typography id="modal-modal-title" variant="p" component="p">
Answer</Typography>  */}

<br/>



<Button onClick={ ()=> { setOpen(false) }}  variant="contained" color="error">Cancel</Button>
<Button  variant="contained" color="secondary">Update</Button>


  </Box>
</Modal>
</div>

    </div>
  )
}

export default SuperAdminDashboard