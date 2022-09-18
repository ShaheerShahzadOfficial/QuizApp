import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const Home = () => {

  const columns = [{ field: "id", headerName: "Test Id", minWidth: 300, flex: 1 },
  {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
          return params.getValue(params.id, "status") === " Passed"
              ? "greenColor"
              : "redColor";
      },
  },
  {
      field: "score",
      headerName: "Marks",
      type: "number",
      minWidth: 150,
      flex: 0.3,
  },

  {
      field: "action",
      headerName: "Actions",
      type: "number",
      minWidth: 150,
      flex: 0.3,
      sortable: false,
      // renderCell: (params) => (
          // <Link to={`/test/${user.name}/${params.getValue(params.id, "id")}`}>
          //     <LaunchIcon color='black' fontSize='large' />
     // </Link>
      // )
  },
  ];

  const rows = [];



  return (
    <div>
   
    <DataGrid
    rows={rows}
    columns={columns}
    pageSize={10}
    disableSelectionOnClick
    className="Student Dashboard"
    autoHeight
/>

    </div>
  )
}

export default Home