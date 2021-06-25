import React from 'react'

import {Paper, Box, Typography, Button} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export const User = ({userData, handleOpenUserDialog}) => {
    return (
        <Paper elevation={3}>
            <Box>
                <Typography variant='h6'>User surname <span>{userData.lastName}
                    </span></Typography>
                <Typography variant='h6'>User Lastname
                <span>
                    {userData.name}
                </span> </Typography>
            </Box>
        </Paper>
        
    )
}
