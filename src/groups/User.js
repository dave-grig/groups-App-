import React from 'react'

import {Paper, Box, Typography, Button} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

export const User = (userData, handleOpenUserDialog) => {
    return (
        <Paper elevation={3}>
            <Box>
                <Typography variant='h6'>User surname {userData.name}</Typography>
                <Typography variant='h6'>User Lastname {userData.lastName}</Typography>
            </Box>
        </Paper>
        
    )
}
