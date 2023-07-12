
const {Plan,Videos} = require("../db")
const getPlan = async (req,res)=>{
    try {
        const activities= await Plan.findAll()
        const videos= await Videos.findAll()
        const r=[activities,videos]
        if(!activities.length) return res.send('No hay actividades')
        return res.json(r);
    } catch (error) {
        return res.status(500).json(error.message)
    }
   
}
module.exports=getPlan