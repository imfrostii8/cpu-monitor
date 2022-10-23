import React, { useEffect, useState} from "react";
import { connect } from "react-redux";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "cpuNumber", headerName: "CPU", flex: 1 },
  { field: "usr", headerName: "USR", flex: 1 },
  { field: "sys", headerName: "SYS", flex: 1 },
  {
    field: "idle",
    headerName: "IDLE",
    flex: 1,
  },
  {
    field: "timestamp",
    headerName: "TIMESTAMP",
    flex : 1,
  },
];




function Table({state} : any) {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    handleSetRows();
  }, [state]);

  const handleSetRows = () => {
    const lastInfo = state.slice(-1)

    if(lastInfo.length !== 0){
      lastInfo[0].forEach((item: any, i : any) => {
        item.id = i + 1;
      });
      console.log(lastInfo)

      console.log(lastInfo[0])
      setRows(lastInfo[0])
    }


  };


  return (
    <div style={{ height: 400, width: "98%", "marginLeft": "1%", "marginRight": "1%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[17]}
        hideFooter={true}
      />
    </div>
  );
}

export default connect(
  (state: any) => ({
    state: state.info,
  }),
  (dispatch: any) => ({})
)(Table);
