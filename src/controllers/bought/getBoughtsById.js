
const {User,Plan, Bought} = require("../../db")
const getBoughtsById = async (req,res)=>{
    const {idUser}=req.query;
    try {
        if (!idUser||idUser==='') return  res.status(400).send("Falta idUser")
        const boughts=await Bought.findAll({where:{UserIdUser:idUser}})
        const planes= await Plan.findAll({where:{idUser}})
        const obj = {boughts, planes}        
        res.status(200).json(obj)
        

    } catch (error) {
        return res.status(500).send(error.message)
    }
   
}
module.exports=getBoughtsById