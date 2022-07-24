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
    const {checkChange} = props
    //設定下拉選單可選城市
    const [city, setCity] = useState([
      { label: "台北市" },
      { label: "新北市(暫時無可用資料)" },
      { label: "桃園市(暫時無可用資料)" },
      { label: "新竹市(暫時無可用資料)" },
      { label: "台中市(暫時無可用資料)" },
    ]);
  
    //設定台北市可選區
    const [district, setDistrict] = useState([
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
    ]);
  
    function handleCheckBox(event){
      const currentCheck = event.target.checked;
      const currentLabelText = event.nativeEvent.path[2].outerText;
      const data = {name:currentLabelText,check:currentCheck};
      // console.log(currentData);
      // if(currentData) console.dir(event.nativeEvent.path[2].outerText);
      // if(currentData==false) console.dir(event.nativeEvent.path[2].outerText);
      // // console.dir(event.nativeEvent.path[2].outerText);
      checkChange(data);
    }
  
    return (
      <Box sx={{ gridArea: "sidebar", marginTop: "5vmin" }}>
        <Autocomplete
          disablePortal
          id="combo-box"
          options={city}
          sx={{ width: "100%"}}
          renderInput={(params) => <TextField {...params} color="searchColor" label="選擇縣市" />}
        />
        <FormGroup
          sx={{
            flexDirection: "row",
            width: "100%",
          }}
        >
          {district.map((district,index) => {
            return (
              <FormControlLabel
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
                label={district}
                onChange={handleCheckBox} 
                sx={{ flexGrow: 1, marginTop:"2vmin" }}
                key={index}
              />
            );
          })}
        </FormGroup>
      </Box>
    );
  }


export default connect((state) => (
  { District: state.checkBox }), {
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
