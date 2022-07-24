import React from 'react'
import { 
    Box,
    ListItem,
    ListItemButton,
    ListItemText,
 } from '@mui/material'
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";


function renderRow(props) {
    const { index, style } = props;
  
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`Item ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    );
  }


export default function Content() {
  return (
    <Box sx={{ gridArea: "main", bgcolor: "#f7f6f1"}}>
          <div
            style={{
              display: "flex",
              flexGrow: 1,
              height: "100%",
              width: "100%",
            }}
          >
            <AutoSizer>
              {({ width, height }) => (
                <FixedSizeList
                  height={height}
                  width={width}
                  itemSize={70}
                  itemCount={100}
                  overscanCount={5}
                >
                  {renderRow}
                </FixedSizeList>
              )}
            </AutoSizer>
          </div>
        </Box>
  )
}
