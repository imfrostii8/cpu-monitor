
import { parseDataIntoCpuModel } from "../Services/cpuService"
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);


import { Request, Response, NextFunction } from 'express';




const getCpuInfo = async (req: Request, res: Response, next: NextFunction) => {


    var { error, stdout, stderr} = await exec("mpstat -o JSON -P ALL 1 1")


    var data = parseDataIntoCpuModel(stdout)


    return res.status(200).json(data);

};

export default { getCpuInfo};