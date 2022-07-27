import React, { useState } from "react";
import {
  Box,
  FormGroup,
  FormControlLabel,
  TextField,
  Autocomplete,
  Checkbox,
} from "@mui/material";
import { connect } from "react-redux";
import { checkBoxChange } from "../../redux/actions/sideBar";

function SideBar(props) {
  //取得容器給的dispatch function
  const { checkChange,District } = props;

  //設定台北市可選區
  const taipei = [
    "文山區",
    "北投區",
    "中正區",
    "大安區",
    "內湖區",
    "中山區",
    "信義區",
    "松山區",
    "士林區",
    "大同區",
    "南港區",
    "萬華區",
    "臺大專區",
  ];

  //設定下拉選單可選城市
  const [city, setCity] = useState([
    { label: "臺北市" },
    { label: "新北市(待更新)" },
    { label: "新竹市(待更新)" },
    { label: "台中市(待更新)" },
  ]);

  //設定台北市可選區處存區
  const [district, setDistrict] = useState([]);

  //設定勾選框顯示狀態
  

  // 處理各別勾選框
  function handleCheckBox(event) {
    const currentCheck = event.target.checked;
    const currentLabelText = event.nativeEvent.path[2].outerText;
    const data = { name: currentLabelText, check: currentCheck };
    checkChange(data);
  }

  // 處理所選城市
  function handleInputChange(e) {
    switch (e.target.textContent) {
      case "臺北市":
        setDistrict(taipei);
        break;
      default:
        setDistrict([]);
    }
  }



  return (
    <Box sx={{ gridArea: "sidebar", marginTop: "5vmin" }}>
      <Autocomplete
        disablePortal
        id="combo-box"
        options={city}
        sx={{ width: "100%" }}
        blurOnSelect="mouse"
        onInputChange={handleInputChange}
        renderInput={(params) => (
          <TextField {...params} color="searchColor" label="選擇縣市" />
        )}
      />
      <FormGroup
        sx={{
          flexDirection: "row",
          width: "100%",
        }}
      >
        {district.map((district, index) => {
          return (
            <FormControlLabel
              label={district}
              onChange={handleCheckBox}
              sx={{ flexGrow: 1, marginTop: "2vmin" }}
              key={index}
              control={
                <Checkbox
                  // defaultChecked
                  sx={{
                    color: "#e1dad0",
                    "&.Mui-checked": {
                      color: "#755433",
                    },
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
            />
          );
        })}
      </FormGroup>
    </Box>
  );
}

export default connect((state) => ({ District: state.checkBox }), {
  checkChange: checkBoxChange,
})(SideBar);

// function mapStateToProps(state){
//     return {District:state}
// }

//回傳對象,由react-redux 的 connet() 幫忙調用dispatch
// const mapDispatchToProps = {
//     checkChange: checkBoxChange,
// }

//回傳函數
// function mapDispatchToProps(dispatch) {
//     return{
//         checkChange: data =>dispatch(checkBoxChange(data))
//     }
// }
