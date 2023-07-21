
const {User} = require("../../db")
const getUsers = async (req,res)=>{
    try {
        const u= await User.findAll({where:{isActive:true}})
        if(!u.length) return res.status(400).send('No hay usuarios todavia')
        
        return res.json(u);
    } catch (error) {
        return res.status(500).json(error.message)
    }
   
}
module.exports=getUsers