import { useState, useEffect, useCallback } from "react";

const useUbikeAPI = (cityName) => {
  let [stateData, setStateData] = useState([]);

  const search = useCallback(async () => {
    try {
      const response = await fetch(
        "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
      );
      const data = await response.json();

      data.forEach((item)=>{
        let neededSiteName = item.sna.substr(11);
        let neededData = {
            cityName,
            siteID:item.sno,
            districtName:item.sarea,
            siteName:neededSiteName,
            currentBikeQuantity:item.sbi,
            currentParkingSpace:item.bemp,
        }
        setStateData(prevState=>[...prevState,neededData]);
      })
    } catch (error) {
      console.log("請求出錯", error);
    }
    // response.then(
    //   response=>{return response.json()}
    // ).then(
    //   response=>{console.log(response)}
    // ).catch(
    //   error=>{console.log("請求出錯",error)}
    //   )
  }, []);

  useEffect(() => {
    search();
  }, [search]);

  return stateData;
};

export default useUbikeAPI;
