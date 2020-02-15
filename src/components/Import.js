import React from 'react'
import { Button, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

const Import = (props) => {
    // fill out this component
console.log(props)

    return (
        <div className='table-container'>
        <Button onClick={props.fetchMakes} variant="contained" color="primary">Import</Button>    
        <h2>COUNT: {props.makes.length}</h2>
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Make</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          {props.makes.map(row => (
            <TableRow key={row.MakeId}>
            <TableCell>{row.MakeId}</TableCell>
            <TableCell>{row.MakeName}</TableCell>
        <TableCell>  
        <Button onClick={() => props.deleteMakes(row.MakeId)} color="secondary">Delete</Button>
        </TableCell>
          </TableRow>
          ))}
        </TableBody>
        </div>
    )
}

export default Import