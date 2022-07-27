import {CHANGE} from "../constant"


const initState = [
  { name: "文山區", check: false},
  { name: "北投區", check: false },
  { name: "中正區", check: false },
  { name: "大安區", check: false },
  { name: "內湖區", check: false },
  { name: "中山區", check: false },
  { name: "信義區", check: false },
  { name: "松山區", check: false },
  { name: "士林區", check: false },
  { name: "大同區", check: false },
  { name: "南港區", check: false },
  { name: "萬華區", check: false },
  { name: "臺大專區", check: false },
];

function sidebarReducer(preState = initState, action) {
  const { type, data } = action;
  let copyArray = [...preState];
  let newState;
  switch (type) {
    case CHANGE:
      newState = copyArray.map((dist) => {
        if (dist.name === data.name) {
          return ({name:data.name,check:data.check});
        } else {
          return dist;
        }
      });
      return newState;
    default:
      return preState;
  }
}

export default sidebarReducer;
