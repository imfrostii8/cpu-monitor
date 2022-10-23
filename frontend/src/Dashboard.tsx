import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LineChart from "./Components/LineChart";
import Table from "./Components/Table";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import { getCpuInfoRequest } from "./Redux/Reducer";
import Slider from "@mui/material/Slider";

function Dashboard({ getCpuInfo }: any) {

    const [polling, setPolling] = useState(1);
    const [idInterval, setIdInterval] = useState<any>(null);
  useEffect(() => {
    clearInterval(idInterval)

   var interval =  setInterval(() => {
      getCpuInfo();
    }, 1000 * polling);
    setIdInterval(interval)
  }, [polling]);

  const setPollingHandler = (val: any) => {
    setPolling(val.target.value)
  }

  return (
    <>
      <Box width={"10%"} marginTop={"0.5%"} marginLeft={"1%"}>
        Polling in Seconds
        <Slider
          className="slider"
          min={1}
          max={20}
          onChange={(val)=> setPollingHandler(val)}
          value={polling}
          defaultValue={1}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>

      <Table ></Table>

      <LineChart polling={polling}></LineChart>
    </>
  );
}

export default connect(
  (state: any) => ({}),
  (dispatch: any) => ({
    getCpuInfo: () => {
      dispatch(getCpuInfoRequest());
    },
  })
)(Dashboard);
