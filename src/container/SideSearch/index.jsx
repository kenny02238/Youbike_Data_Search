import {connect} from "react-redux"
import React from 'react';
import {sideBarSearchData} from "../../redux/actions/sideBar"
import { Box,TextField,IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';







function SideSearch(props) {

  const{sideBarSearchData,checkBoxData}=props

  function handleKeyPress(event){
    
    let a = checkBoxData.filter((item)=>item.check===true)

    if(event.code==="Enter"){
      sideBarSearchData(event.target.value)
      
    }
    if(a.length===0) alert("請先勾選想搜尋之行政區");
  }

  function handleChange(event){
    sideBarSearchData(event.target.value)
  }

  return (
    <Box 
        sx={{
            gridArea:"search",
            display:"flex",
            alignItems:"flex-end",
            justifyContent:"flex-start"
        }}>
        <TextField
            label="輸入完整站名或關鍵字"
            variant="standard"
            color="searchColor"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
        />
        <IconButton >
            <SearchIcon/>
        </IconButton>
    </Box>
  )
}


export default connect(
  (state)=>({searchData:state.sideBarSearch ,checkBoxData:state.checkBox}), 
  {sideBarSearchData}
  )(SideSearch)