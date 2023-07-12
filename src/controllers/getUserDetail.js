
const {Plan,User} = require("../db")
const getPlanDetail = async (req,res)=>{
    const {idUser}=req.params
    try {
        if (idUser) {
            const u= await User.findByPk(idUser)
            if(!u) return res.status(400).send('Usuario no encontrado')
            const p= await Plan.findAll({where:{idUser:idUser}})
            const r=[u,p]
            return res.json(r);
        }
        return res.status(400).send("Falta idUser")

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports=getUserDetail

