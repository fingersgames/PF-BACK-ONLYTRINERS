
const {Plan,User,Video} = require("../../db")
const getPlanDetail = async (req,res)=>{
    const {idPlan}=req.params
    try {
        if (idPlan) {
            const plan= await Plan.findByPk(idPlan)
            if(!plan) return res.status(400).send('Plan no encontrado')
            if(!plan.isActive) return res.status(400).send('Plan no encontrado')
            const user=await User.findByPk(plan.idUser)
            const videos= await Video.findAll({where:{idPlan:idPlan}})
             const r={...plan.dataValues,idUser:user.idUser,userName:user.userName,videos:videos}
            return res.json(r);
        }
        return res.status(400).send("Falta idPlan")

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports=getPlanDetail

