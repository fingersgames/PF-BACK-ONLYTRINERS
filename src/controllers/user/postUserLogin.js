
const {User} = require("../../db")
const postUserLogin = async (req,res)=>{
    const {userName, password}=req.body
    console.log(req.body)
    if (!userName || !password)  return res.status(400).send("Falta datos")
    try {
        user= await User.findOne({where:{userName:userName}})
        if(!user) return res.status(400).send('Usuario no encontrado')
        if(!user.isActive) return res.status(400).send('Usuario no encontrado')
        if(user.password!==password) return res.status(400).send('Contraseña invalida')
        const r={...user.dataValues,password:""}
        return res.json(r);

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports=postUserLogin

