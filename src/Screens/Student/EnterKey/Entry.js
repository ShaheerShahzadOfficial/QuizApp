import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import swal from 'sweetalert'
import './Entry.css'
import { useParams } from 'react-router-dom'
const Entry = () => {
  const { name } = useParams()
  const [Key, setKey] = useState('')

  const checkToken = () => {
    if (Key !== '') {
      axios.post(
        'http://localhost:4000/superAdmin/getKey',
        {
          Key,
          subject: name,
        },
        {
          withCredentials: true,
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
        },
      )
    } else {
      swal({ text: 'Key is Required', buttons: 'Sorry!' })
    }
  }

  return (
    <div>
      <h1 className={'heading'}>Enter Key</h1>
      <div className="KeyContainer">
        <input
          placeholder="Enter Key To Proceed"
          type="password"
          className="KeyInput"
          value={Key}
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <br />
      <br />
      <div className="btn">
        <Button
          onClick={checkToken}
          variant="contained"
          disabled={Key === '' ? true : false}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default Entry
