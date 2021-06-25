import React from 'react'
import {useState} from 'react'

import './Group.css'

// material ui imports
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export const AddGroup = ({groupsData, handleChange, addUserInfo}) => {
    return (
        <div>
            <Paper elevation={3}>
                <Box>
                    <TextField className='add-group__textfield' onChange={(e) => handleChange(e,'userName')} />
                    <TextField className='add-group__textfield' onChange={(e) => handleChange(e, 'userLastName')} />
                    <Button onClick={addUserInfo}>Save</Button>
                </Box>
            </Paper>
        </div>
    )
}

