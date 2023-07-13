
const {Plan,User,Video} = require("../db")
const getPlanDetail = async (req,res)=>{
    const {idPlan}=req.params
    try {
        if (idPlan) {
            const p= await Plan.findByPk(idPlan)
            if(!p) return res.status(400).send('Plan no encontrado')
            const u=await User.findByPk(p.idUser)
            const v= await Video.findAll({where:{idPlan:idPlan}})
            console.log(v)
            const r=[p,v,{idUser:u.idUser,userName:u.userName}]
            return res.json(r);
        }
        return res.status(400).send("Falta idPlan")

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports=getPlanDetail

