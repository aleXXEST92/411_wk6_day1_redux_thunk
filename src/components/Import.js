import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'
import { Container } from '@material-ui/core/Container'

const Import = (props) => {
    // fill out this component
console.log(props)

    return (
        <div>
        <Button onClick={props.fetchMakes} variant="contained" color="primary">Import</Button>
    
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          {props.makes.map(make => (
            <TableRow key={make}>
              <TableCell align="right">{make.MakeId}</TableCell>
              <TableCell align="right">{make.MakeName}</TableCell>
              {/* <TableCell align="right">{make.}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>

        </div>
    )
}

export default Import