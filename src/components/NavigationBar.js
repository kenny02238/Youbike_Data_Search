import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PaymentIcon from "@mui/icons-material/Payment";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import CelebrationIcon from "@mui/icons-material/Celebration";
import FaceIcon from "@mui/icons-material/Face";
import logo from "../images/logo.png";
import { Link, Breadcrumbs, Box, IconButton } from "@mui/material";
import Image from "mui-image";

//設置導覽列各別 icon
function setIcon(index) {
  switch (index) {
    case 0:
      return (
        <HomeIcon sx={{ mr: 0.5, color: "#755433", fontSize: "2.5vmin" }} />
      );
    case 1:
      return (
        <AssignmentIndIcon
          sx={{ mr: 0.5, color: "#755433", fontSize: "2.5vmin" }}
        />
      );
    case 2:
      return (
        <PaymentIcon sx={{ mr: 0.5, color: "#755433", fontSize: "2.5vmin" }} />
      );
    case 3:
      return (
        <PedalBikeIcon
          sx={{ mr: 0.5, color: "#755433", fontSize: "2.5vmin" }}
        />
      );
    case 4:
      return (
        <FiberNewIcon sx={{ mr: 0.5, color: "#755433", fontSize: "2.5vmin" }} />
      );
    case 5:
      return (
        <CelebrationIcon
          sx={{ mr: 0.5, color: "#755433", fontSize: "2.5vmin" }}
        />
      );
    default:
      return "error";
  }
}

export default function NavigationBar() {
  const [data, setData] = useState([
    "站點資訊",
    "註冊方式",
    "收費方式",
    "設備介紹",
    "最新消息",
    "活動專區",
  ]);

  return (
    <Box
      sx={{
        gridArea: "Navigation",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link href="/Youbike_Data_Search" width="10%" height="100%">
        <Image
          src={logo}
          showLoading
          width="100%"
          height="100%"
          easing="linear"
          duration={900}
          fit="fill"
        />
      </Link>

      <Breadcrumbs aria-label="breadcrumb">
        {data.map((data, index) => {
          return (
            <Link
              key={index}
              underline="hover"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "2.5vmin",
                margin:" 0 2vmin ",
                color:"#675F54",
              }}
              href="/Youbike_Data_Search"
            >
              {setIcon(index)}
              {data}
            </Link>
          );
        })}
      </Breadcrumbs>
      <IconButton sx={{ fontSize: "2.5vmin" ,width:"10%", height:"100%"}} variant="outlined" color="fontColor">
        <FaceIcon sx={{ mr: 0.5, color: "#755433", fontSize: "2.5vmin" }} />
        會員登入
      </IconButton>
    </Box>
  );
}
