import React from 'react';
import { Box,TextField,IconButton} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';




function handleChange(event){
  // console.log(event);
}
function handleKeyPress(event){
  console.log(event);
}

export default function SideSearch() {
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
        <IconButton>
            <SearchIcon/>
        </IconButton>
    </Box>
  )
}
