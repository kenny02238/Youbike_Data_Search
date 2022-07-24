import { SEARCHDATA } from "../constant";

const initState = [""]


function sideBarSearch(preState=initState,action){
    const{type,data} = action;
    let copyState = [...preState];

    switch(type){
        case SEARCHDATA:
            copyState = [data];
            return copyState;
        default:
            return preState;
    }
}

export default sideBarSearch;