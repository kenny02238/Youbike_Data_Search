import React from 'react'
import { Box, Paper } from '@mui/material'
export default function Header() {
  return (
    <Box sx={{ gridArea: "header", marginTop: "3vmin" }}>
        {}
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "4vmin",
              backgroundColor: "#f7f6f1",
              color: "#755433",
              height: "100%",
            }}
          >
            Youbike2.0站點資訊
          </Paper>
        </Box>
  )
}
