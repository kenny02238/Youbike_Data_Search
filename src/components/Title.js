import React from "react";
import { Box, Paper } from "@mui/material";

const titleArray = ["縣市", "區域", "站點名稱", "可借車輛", "可停空位"];




export default function Title() {
  return (
    <Box
      sx={{
        gridArea: "title",
        marginTop: "5vmin",
        borderBottom: "2px solid #807265",
        display: "flex",
        width: "100%",
      }}
    >
      {titleArray.map((data, index) => {
        if (index == 2) {
          return (
            <Paper
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.2vmin",
                backgroundColor: "#d8cfc8",
                height: "100%",
                color: "#755433",
                width:"40%",
              }}
            >
              {data}
            </Paper>
          );
        } else {
          return (
            <Paper
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.2vmin",
                backgroundColor: "#d8cfc8",
                height: "100%",
                width: "10%",
                color: "#755433",
                width:"15%",
              }}
            >
              {data}
            </Paper>
          );
        }
      })}
    </Box>
  );
}
