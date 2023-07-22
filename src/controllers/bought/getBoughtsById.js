
const {User,Plan, Bought} = require("../../db")
const getBoughtsById = async (req,res)=>{
    const {idUser}=req.params;
    try {
        if (!idUser||idUser==='') return  res.status(400).send("Falta idUser")
        const boughts=await Bought.findAll({where:{UserIdUser:idUser}})
        const planes= await Plan.findAll()
        
        
        

    } catch (error) {
        return res.status(500).json(error.message)
    }
   
}
module.exports=getBoughtsById