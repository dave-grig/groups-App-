import React from 'react'
import {useState} from 'react'

import {User} from './User'

import './Group.css'


import {Paper, Box, Button, Typography, TextField} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
// import AddIcon from '@material-ui/icons/' 

export const Group = ({groupData}) => {
    const [openUserDialog, setOpenUserDialog] = useState(false);
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [usersData, setUsersData] = useState([]);
    const [nameError, setNameError] = useState('');
    const [lastnameError, setLastnameError] = useState('');

    console.log(groupData);
    
    const handleOpenUserDialog = (e) => {
        console.log(usersData.length, groupData.maxMembers,"hhhhhh")
        if (usersData.length <= +groupData.maxMembers) {
            setOpenUserDialog(!openUserDialog);
        }
    }

    const handleChange = (e,name) => {
        switch (name) {
            case 'name': {
                if (/\d/.test(e.target.value)) {
                    setNameError('name must contain only letters');
                } else {
                    setNameError('');
                }
                setUserName(e.target.value);
                break;
            }

            case 'lastName': {
                if (/\d/.test(e.target.value)) {
                    setLastnameError('name must contain only letters');
                } else {
                    setLastnameError('');
                }
                setUserLastName(e.target.value);
                break;
            } 
        }
    }

    const handleAddUserInfo = (e) => {
        console.log(userName, userLastName,"aqqqq");
        setUsersData([...usersData, {
            name: userName,
            lastName: userLastName
        }]);

        setOpenUserDialog(false);
    }
    
    return (
        <div>
            <Paper elevation={3}>
                <Box>
                    <Typography variant='h6'>Group name {groupData.groupName}</Typography>
                    <Typography variant='h6'>Group Max members {groupData.maxMembers}</Typography>
                    <Button onClick={handleOpenUserDialog}>
                        Add User Info
                        <AddIcon />
                    </Button>
                </Box>
            </Paper>

            {openUserDialog ? <Paper elevation={3}>
                <Box>
                    <TextField onChange={(e) => (handleChange(e,'name'))} />
                    <Typography>{nameError}</Typography>
                    <TextField onChange={(e) => (handleChange(e,'lastName'))} />
                    <Typography>{lastnameError}</Typography>
                    <Button onClick={handleAddUserInfo}>
                        Save
                        <AddIcon />
                    </Button>
                </Box>
            </Paper> : null}

            {usersData.map((userData, index) => {
                return <User userData={userData} handleOpenUserDialog={handleOpenUserDialog} />
            })}
        </div>
    )
}
