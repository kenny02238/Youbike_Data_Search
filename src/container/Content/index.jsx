import React from "react";
import { Box, ListItem } from "@mui/material";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import useUbikeAPI from "../../hooks/useUbikeAPI";
import styled from "@emotion/styled";

import { connect } from "react-redux";

const StyledList = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  overflow: hidden;
  font-size: 2.2vmin;
  width: 15.2724%;
`;
const BigStyledList = styled(StyledList)`
  width: 40.726%;
`;
const RightStyledList = styled(StyledList)`
  width: 13.456%;
`;
const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: transparent;
`;

const cityName = "臺北市";

function renderRow(props) {
  const { index, style, data } = props;
  return (
    <>
      <ListItem style={style} key={index} component="div" disablePadding>
        <StyledButton>
          <StyledList>{`${data[index].cityName}`}</StyledList>
          <StyledList>{`${data[index].districtName}`}</StyledList>
          <BigStyledList>{`${data[index].siteName}`}</BigStyledList>
          <StyledList>{`${data[index].currentBikeQuantity}`}</StyledList>
          <RightStyledList>{`${data[index].currentParkingSpace}`}</RightStyledList>
        </StyledButton>
      </ListItem>
    </>
  );
}

function Content(props) {

  const datas = useUbikeAPI(cityName);

  function filterCheckBoxData() {
    
    const { ifCheck,searchData } = props;
    let neededData;
    //確認是否有被checkBox勾選
    let checkBoxData = datas.filter((data) => {
      let a = ifCheck.find((e) => {
        return e.name === data.districtName;
      });
      if(a!==undefined){
        return a.check === true;
      }
      
    });
    // 確認是否有符合搜尋空內容
    if(searchData[0]!==""){
        neededData = checkBoxData.filter((item)=>{
        return item.siteName.includes(searchData[0])
      })
    }
    if(neededData){
      return neededData
    }else{
      return checkBoxData
    }

  }

  return (
    <Box sx={{ gridArea: "main", bgcolor: "#f7f6f1" }}>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          height: "100%",
          width: "100%",
        }}
      >
        <AutoSizer>
          {({ width, height }) => (
            <FixedSizeList
              height={height}
              width={width}
              itemSize={60}
              itemCount={filterCheckBoxData().length}
              overscanCount={5}
              itemData={filterCheckBoxData()}
            >
              {renderRow}
            </FixedSizeList>
          )}
        </AutoSizer>
      </div>
    </Box>
  );
}

export default connect((state) => ({
  ifCheck: state.checkBox,
  searchData: state.sideBarSearch,
}))(Content);
