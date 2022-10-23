import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getCpuInfo(action: any): any {
  try {
    const response= yield call(axios.get,"http://localhost:5000/cpu-info");


    yield put({ type: "CPU_INFO_SUCCEEDED", cpuInfo: response.data });
  } catch (e: any) {
    console.log(e)
    yield put({ type: "CPU_INFO_FAILED", message: e.message });
  }
}

async function callApi() {
  const response = await axios.get("http://localhost:5000/cpu-info");
  console.log(response.data);
  return response.data;
}

function* mySaga() {
  yield takeEvery("CPU_INFO_REQUEST", getCpuInfo);
}

export default mySaga;
