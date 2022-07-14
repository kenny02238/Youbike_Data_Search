import React from "react";
import {
  Box,
  Autocomplete,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Paper,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import CallIcon from '@mui/icons-material/Call';
import LocationIcon from '@mui/icons-material/AddLocation';
import RedditIcon from '@mui/icons-material/Reddit';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';


const District = [
  { label: "內湖區" },
  { label: "中山區" },
  { label: "文山區" },
  { label: "信義區" },
  { label: "大安區" },
  { label: "松山區" },
  { label: "士林區" },
  { label: "大同區" },
  { label: "南港區" },
  { label: "北投區" },
  { label: "中正區" },
  { label: "萬華區" },
  { label: "臺大專區" },
];


export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          columnGap: 5,
          gridTemplateRows: "8vmin 7.5vmin 50vmin 12.5vmin",
          gridTemplateAreas: `
          "Navigation Navigation Navigation Navigation Navigation Navigation Navigation Navigation Navigation Navigation"
          ". header header header header header header header header ."
          ". main main sidebar sidebar sidebar sidebar sidebar sidebar ."
          ". . . sidebar sidebar sidebar sidebar sidebar sidebar ."`,
        }}
      >
        <Box
          sx={{
            gridArea: "Navigation",
            marginTop:"2vmin",
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
          }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center",fontSize:"2.5vmin"}}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 , color:pink[200], fontSize:"2.5vmin"}}/>
              模擬導覽列
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center",fontSize:"2.5vmin" }}
              color="inherit"
              href="/"
            >
              <CallIcon sx={{ mr: 0.5 , color:pink[200], fontSize:"2.5vmin"}} />
              模擬導覽列
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center",fontSize:"2.5vmin" }}
              color="inherit"
              href="/"
            >
              <LocationIcon sx={{ mr: 0.5 , color:pink[200], fontSize:"2.5vmin"}} />
              模擬導覽列
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center",fontSize:"2.5vmin" }}
              color="inherit"
              href="/"
            >
              <RedditIcon sx={{ mr: 0.5 , color:pink[200], fontSize:"2.5vmin"}} />
              模擬導覽列
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center",fontSize:"2.5vmin" }}
              color="inherit"
              href="/"
            >
              <WhatshotIcon sx={{ mr: 0.5 , color:pink[200], fontSize:"2.5vmin"}} />
              模擬導覽列
            </Link>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center",fontSize:"2.5vmin" }}
              color="inherit"
              href="/"
            >
              <SupervisorAccountIcon sx={{ mr: 0.5 , color:pink[200], fontSize:"2.5vmin"}} />
              模擬導覽列
            </Link>

          </Breadcrumbs>
        </Box>
        <Box sx={{ gridArea: "header", marginTop: "3vmin" }}>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "3vmin",
              backgroundColor: "#ffebee",
              height: "100%",
              gridArea: "header",
            }}
          >
            Youbike2.0站點資訊
          </Paper>
        </Box>
        <Box sx={{ gridArea: "main", marginTop: "5vmin"}}>
          <Autocomplete
            disablePortal
            id="combo-box"
            options={District}
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} label="選擇行政區" />
            )}
          />
          <FormGroup
            sx={{
              flexDirection: "row",
              width: "100%",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: pink[400],
                    "&.Mui-checked": {
                      color: pink[200],
                    },
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="內湖區"
              sx={{ flexGrow: 1 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: pink[400],
                    "&.Mui-checked": {
                      color: pink[200],
                    },
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="中山區"
              sx={{ flexGrow: 1 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: pink[400],
                    "&.Mui-checked": {
                      color: pink[200],
                    },
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="文山區"
              sx={{ flexGrow: 1 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: pink[400],
                    "&.Mui-checked": {
                      color: pink[200],
                    },
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="信義區"
              sx={{ flexGrow: 1 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: pink[400],
                    "&.Mui-checked": {
                      color: pink[200],
                    },
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="大安區"
              sx={{ flexGrow: 1 }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: pink[400],
                    "&.Mui-checked": {
                      color: pink[200],
                    },
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="松山區"
              sx={{ flexGrow: 1 }}
            />
          </FormGroup>
        </Box>
        <Box sx={{ gridArea: "sidebar", bgcolor: "#ffebee",marginTop: "5vmin" }}>content</Box>
      </Box>
    </>
  );
}
