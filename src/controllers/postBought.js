const {User, Plan, Bought} = require('../db')
const postUser = async (req,res)=>{
    try {
        const {
          idUser,
          idPlan
        } = req.body;
        const user= await User.findByPk(idUser)
        if (!user) return res.status(400).json({error:"Usuario no existe"})
        const plan=await Plan.findByPk(idPlan)
        if (!plan) return res.status(400).json({error:"Plan no existe"})
        const bought = await Bought.findOne({
          where: {
            idUser: idUserValue,
            idPlan: idPlanValue,
          },
        });
        if (bought) return res.status(400).json({error:"Usuario ya compro este plan"})
        await Bought.create({
          idUser: idUserValue,
          idPlan: idPlanValue,
        });
        return res.send('Compra guardada')
      } catch (error) {
          console.log(error)
        res.status(500).json({ error: error.message });
      }
    }
module.exports=postUser
