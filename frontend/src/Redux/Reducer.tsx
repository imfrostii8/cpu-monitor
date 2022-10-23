function reducer(state = {info : []} , action : any) : any {
    switch (action.type) {
      case "CPU_INFO_SUCCEEDED":

        return {
          ...state,
          info: [...state.info, action.cpuInfo]
        };
      case "CPU_INFO_FAILED":
        return {
          ...state,
          todos: []
        };
      default:
        return state;
    }
  }


 export function getCpuInfoRequest() {
   
    return {
      type: 'CPU_INFO_REQUEST',
    }
  }
 export function getCpuInfoSuccess(cpuInfo : any) {
   
    return {
      type: 'CPU_INFO_SUCCEEDED',
      cpuInfo : cpuInfo
    }
  }
 export function getCpuInfoFail() {
   
    return {
      type: 'CPU_INFO_FAILED',
    }
  }

export default reducer;