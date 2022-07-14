import Home from "../views/Home"
import {Navigate} from "react-router-dom"


const element = [
    {
      path:"/Youbike_Data_Search",
      element:<Home/>,
      children:[
      ]
    },
    {
      path:"/",
      element:<Navigate to="/Youbike_Data_Search"/>
    }
  ]

  export default element