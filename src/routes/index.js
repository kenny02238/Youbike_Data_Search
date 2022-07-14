import Home from "../views/Home"
import {Navigate} from "react-router-dom"


const element = [
    {
      path:"/home",
      element:<Home/>,
      children:[
       
      ]
    },
    {
      path:"/",
      element:<Navigate to="/home"/>
    }
  ]

  export default element