import React from "react";

import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";
import Title from "../components/Title";
import SideBar  from "../container/SideBar";
import Content from "../container/Content";
import SideSearch from "../container/SideSearch";

import {
  Box,
} from "@mui/material";


export default function Home(props) {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
          columnGap: 5,
          gridTemplateRows: "13vmin 7.5vmin 10vmin 50vmin 12.5vmin",
          gridTemplateAreas: `
          ". Navigation Navigation Navigation Navigation Navigation Navigation Navigation Navigation ."
          ". header header header header header header header header ."
          ". sidebar sidebar title title title title title title."
          ". sidebar sidebar main main main main main main ."
          ". search search main main main main main main ."`,
        }}
      >
        <NavigationBar/>
        <Header/>
        <Title/>
        <SideBar/>
        <Content/>
        <SideSearch/>
        
      </Box>
    </>
  );
}
