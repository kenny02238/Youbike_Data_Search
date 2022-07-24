import React, { useState, useEffect } from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import store from "./redux/store"
import {Provider} from "react-redux"


const theme = createTheme({
  palette: {
    Kenny: {
      main: "#ffc1e3",
      darker: "#bf5f82",
    },
    fontColor: {
      main: "#675F54",
    },
    iconColor: {
      main: "#755433",
    },
    searchColor: {
      main: "#e1dad0",
    },
  },
});

function App() {
  const element = useRoutes(routes); //定義路由表
  

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {element}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
