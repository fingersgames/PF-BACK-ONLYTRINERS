
const {Plan} = require("../db")
const getPlan = async (req,res)=>{
    try {
        const activities= await Plan.findAll()
        // const videos= await Video.findAll()
        
        if(!activities.length) return res.send('No hay actividades')
        return res.json(activities);
    } catch (error) {
        return res.status(500).json(error.message)
    }
   
}
module.exports=getPlan