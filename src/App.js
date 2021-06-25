import logo from './logo.svg';
import './App.css';

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

import {Group} from './groups/Group';
import {AddGroup} from './groups/AddGroup'
import { SearchResults } from './groups/SearchResults';


function App() {
  const [groupsData, setGroupsData] = useState([]);
  const [openGroupDialog, setOpenGroupDialog] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [maxMembers, setMaxMembers] = useState('');
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  console.log(groupsData,"sdsd");
  console.log(groupName, maxMembers,"kkkk")
  const handleOpenGroupDialog = (e) => {
    setOpenGroupDialog(!openGroupDialog);
  }

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleSearchClick = (e) => {
    setSearchResult(groupsData.filter((groupData) => {
      console.log(groupData.groupName,"aaaaaaa");
      return groupData.groupName.toLowerCase() === searchText.toLowerCase();
    })); 
  }

  const handleChange = (e, name) => {
    console.log(e,"lll")  
    switch(name) {
          case 'groupName' : {
              setGroupName(e.target.value);
              break;
          }

          case 'maxMembers' : {
              setMaxMembers(e.target.value);
          }
      }
  }

  const handleSave = (e) => {
    setGroupsData([...groupsData, {
      groupName: groupName,
      maxMembers: maxMembers
    }])
  }

  return (
    <div className="App">
      <TextField onChange={handleSearchChange} />
      <Button onClick={handleSearchClick}>Search</Button>
      <Button onClick={handleOpenGroupDialog}>
        Add Group 
        <AddIcon />
      </Button>

      {openGroupDialog ? <AddGroup groupsData={groupsData} handleChange={handleChange} handleSave={handleSave} /> : null}

      {groupsData.map((groupData, index) => {
        return <Group key={index} groupData={groupData} />
      })}

      < SearchResults searchResult={searchResult} />
    </div>
  );
}

export default App;
