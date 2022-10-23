import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import FormControl from '@mui/material/FormControl';
import { connect } from "react-redux";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import { ApexOptions } from "apexcharts";

function LineChart({ state, polling }: any) {

  const [period, setPeriod] = useState(10);

  useEffect(() => {
    getUsageByCpu();
  }, [state]);

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(Number(event.target.value));
  };

  const getUsageByCpu = () => {
    var cpus: any = [
      { name: "-1", data: [] },

      { name: "0", data: [] },
      { name: "1", data: [] },
      { name: "2", data: [] },
      { name: "3", data: [] },
      { name: "4", data: [] },
      { name: "5", data: [] },
      { name: "6", data: [] },
      { name: "7", data: [] },
      { name: "8", data: [] },
      { name: "9", data: [] },
      { name: "10", data: [] },
      { name: "11", data: [] },
      { name: "12", data: [] },
      { name: "13", data: [] },
      { name: "14", data: [] },
      { name: "15", data: [] },
    ];
    const lastTen = state.slice(-(period));
    var count = 0;
    while (count < 16) {
      lastTen.forEach((elem: any) => {
        cpus[count].data.push(elem[count].usr)
      });
      count++;
    }

    setCpus(cpus)
  };

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Cpu Usage By Time",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      labels: {
        show : false
      },
    },
  };

  const [cpus, setCpus] = useState([]);

  return (
    <div id="chart">
      <FormControl style={{"marginTop": "1%", "marginLeft": "0.5%"}}>
  <InputLabel id="demo-simple-select-label">Period</InputLabel>
  <Select
  className="select"
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={period.toString()}
    onChange={handleChange}
    label="Period"
  >
    <MenuItem className="seconds" value={10}>Last 10 Seconds</MenuItem>
    <MenuItem className="minute" value={60}>Last minute</MenuItem>
    <MenuItem value={1200}>Last 20 minutes</MenuItem>
    <MenuItem value={3600}>Last hour</MenuItem>
    <MenuItem value={21600}>Last 6 hours</MenuItem>
    <MenuItem value={86400}>Last day</MenuItem>
  </Select>
</FormControl>
      <ReactApexChart
        options={options}
        series={cpus}
        type="line"
        height={350}
      />
    </div>
  );
}

export default connect(
  (state: any) => ({
    state: state.info,
  }),
  (dispatch: any) => ({})
)(LineChart);
