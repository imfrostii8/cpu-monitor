import { Cpu } from "../models/cpu";

export function parseDataIntoCpuModel(data: string) {
    var timestamp, cpuArray, newCpuArray = [];
  try {

    var json = JSON.parse(data);

    timestamp = json.sysstat.hosts[0].statistics[0].timestamp
    cpuArray = json.sysstat.hosts[0].statistics[0]["cpu-load"]

    // console.log(timestamp)
    // console.log(Date.parse(timestamp))
    // console.log(cpuArray)



  } catch (e) {
    console.log(e);
  }


   cpuArray.forEach(async elem =>{

    const newCpu = {
        cpuNumber : elem.cpu,
        usr : elem.usr,
        sys : elem.sys,
        idle : elem.idle,
        timestamp : timestamp,
    }

    newCpuArray.push(newCpu)

    try{
        let cpu = await Cpu.findOne({ cpuNumber: elem.cpu})
        if(cpu){
            await Cpu.updateOne({ _id : cpu._id}, { usr : newCpu.usr, sys : newCpu.sys, idle: newCpu.idle, timestamp : newCpu.timestamp})
        }else{

            await Cpu.create(newCpu)
        }

      }catch(err){
        console.log(err)
      }
});

return newCpuArray


}
