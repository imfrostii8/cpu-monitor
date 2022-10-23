
import mongoose from 'mongoose'

const CpuSchema = new mongoose.Schema({
    cpuNumber: { 
        type : Number,
        required: true
    },
    usr: { 
        type : Number,
        required: true
    },
    sys: { 
        type : Number,
        required: true
    },
    idle: { 
        type : Number,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    }
});

const Cpu = mongoose.model('Cpu', CpuSchema)

export { Cpu }