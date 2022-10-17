import style from '../Admin/dashboard.module.css'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Button, IconButton, Modal, Typography } from '@mui/material'
import { DeleteForever, Key } from '@mui/icons-material'
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios'
import swal from 'sweetalert'
import { AllUser } from '../../Redux/Actions/SuperAdmin'
import { useDispatch, useSelector } from 'react-redux'
const SuperAdminDashboard = () => {
  const [open, setOpen] = useState(false)
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [Allowed, setAllowed] = useState('')
  const [Id, setId] = useState('')

  const [key, setKey] = useState('')
  const [subject, setSubject] = useState('')
  const [ModalTwo, setModalTwo] = useState(false)

  const handleClose = () => setOpen(false)

  const dispatch = useDispatch()

  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: 'rgb(0, 2, 109)',
    border: '2px solid transparent',
    boxShadow: 24,
    p: 4,
    color: 'white',
  }

  useEffect(() => {
    dispatch(AllUser())
  }, [dispatch])

  const { user } = useSelector((state) => state.Users)

  const columns = [
    { field: 'id', headerName: 'User Id', minWidth: 300, flex: 0.5 },
    {
      field: 'role',
      headerName: 'UserRole',
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: 'name',
      headerName: 'User Name',
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: 'allowed',
      headerName: 'Allowed To Quiz',
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: 'action',
      headerName: 'Actions',
      minWidth: 150,
      flex: 0.3,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton
            onClick={() => {
              setOpen(true)
              setId(params.getValue(params.id, 'id'))
              setEmail(params.getValue(params.id, 'email'))
              setName(params.getValue(params.id, 'name'))
              setAllowed(params.getValue(params.id, 'allowed'))
              setRole(params.getValue(params.id, 'role'))
            }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={() => {
              axios
                .delete(
                  `http://localhost:4000/superAdmin/deleteUser/${params.getValue(
                    params.id,
                    'id',
                  )}`,
                  {
                    withCredentials: true,
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                  },
                )
                .then((result) => {
                  console.log(result?.data?.msg)
                  swal({ text: result?.data?.msg })
                  dispatch(AllUser())
                })
                .catch((err) => {
                  console.log(err?.response)
                })
            }}
          >
            <DeleteForever />
          </IconButton>
        </>
      ),
    },
  ]

  const rows = []

  user
    ? user?.forEach((item) => {
        rows.push({
          id: item._id,
          role: item.role,
          name: item.name,
          email: item.email,
          allowed: item.AlowedToAttemptQuiz,
        })
      })
    : rows.push({
        id: 'item._id',
        role: 'item.role',
        name: 'item.name',
        email: 'item.email',
        AlowedToAttemptQuiz: 'AlowedToAttemptQuiz',
      })

  const column = [
    { field: 'id', headerName: 'Key Id', minWidth: 300, flex: 0.5 },
    {
      field: 'key',
      headerName: 'Key Value',
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: 'subject',
      headerName: 'Subject',
      minWidth: 150,
      flex: 0.3,
    },
    {
      field: 'action',
      headerName: 'Actions',
      minWidth: 150,
      flex: 0.3,
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton
            onClick={() => {
              setModalTwo(true)
              setId(params.getValue(params.id, 'id'))
              setKey(params.getValue(params.id, 'key'))
              setSubject(params.getValue(params.id, 'subject'))
            }}
          >
            <EditIcon />
          </IconButton>

          <IconButton
            onClick={() => {
              axios
                .delete(
                  `http://localhost:4000/superAdmin/deleteKey/${params.getValue(
                    params.id,
                    'id',
                  )}`,
                  {
                    withCredentials: true,
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                  },
                )
                .then((result) => {
                  console.log(result?.data?.msg)
                  swal({ text: result?.data?.msg })
                  dispatch(AllUser())
                })
                .catch((err) => {
                  console.log(err?.response)
                })
            }}
          >
            <DeleteForever />
          </IconButton>
        </>
      ),
    },
  ]

  const updateUser = () => {
    axios
      .put(
        `http://localhost:4000/superAdmin/updateUser/${Id}`,
        {
          AlowedToAttemptQuiz: Allowed,
          role,
        },
        {
          withCredentials: true,
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        },
      )
      .then((result) => {
        console.log(result?.data)
        setOpen(false)
        swal({ text: result?.data?.msg })

        dispatch(AllUser())
      })
      .catch((err) => {
        console.log(err?.response)
      })
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', margin: '5vmax' }}>
        {' '}
        Welcome to Super Admin DashBoard{' '}
      </h2>

      <div style={{ width: '90%', margin: 'auto' }}>
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
      <div style={{ width: '90%', margin: 'auto' }}></div>
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
              <input
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Allowed to Attempt Quiz"
                value={Allowed}
                onChange={(e) => setAllowed(e.target.value)}
              />
              <input
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            <br />

            <Button
              onClick={() => {
                setOpen(false)
              }}
              variant="contained"
              color="error"
            >
              Cancel
            </Button>
            <Button variant="contained" color="secondary" onClick={updateUser}>
              Update
            </Button>
          </Box>
        </Modal>
      </div>

      <div style={{ width: '90%', margin: 'auto' }}>
        <h2 style={{ textAlign: 'center', margin: '1vmax' }}> Entry Keys </h2>
        <DataGrid
          rows={rows}
          columns={column}
          pageSize={10}
          disableSelectionOnClick
          className="Entry Key"
          autoHeight
        />
      </div>

      <div>
        <Modal
          open={ModalTwo}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className={style.modal}
        >
          <Box sx={styles}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update Key
            </Typography>

            <br />


            <div className={style.answerContainer}>
              <input
                placeholder="Key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
              <input
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <br />

            <Button
              onClick={() => {
               setModalTwo(false)
              }}
              variant="contained"
              color="error"
            >
              Cancel
            </Button>
            <Button variant="contained" color="secondary" onClick={updateUser}>
              Update
            </Button>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default SuperAdminDashboard
