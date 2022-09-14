import React, { useEffect } from 'react'
import { useDispatch,useSelector} from "react-redux"
import { AllUser } from '../../Redux/Actions/SuperAdmin'
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

const SuperAdminDashboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
dispatch(AllUser())
    }, [])
    const {user,error,loading} = useSelector(state => state.Users)
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
             <IconButton onClick={()=>alert(params.getValue(params.id, "id"))}>
             <Delete/>
             </IconButton>
        )
    },
    ];
  
    const rows = [];


    user && user?.Users?.map((item,i)=>(
rows.push({
  id:item._id,
  role:item.role,
  name:item.name
})   )
     ) 

  return (
    <div>

<h2 style={{textAlign:"center" ,margin:"5vmax"}}>Welcome to Super Admin DashBoard</h2>
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
    </div>
  )
}

export default SuperAdminDashboard