const {User, Plan, Bought} = require('../../db')
const postBought= async (req,res)=>{
    try {
        const {
          idUser,
          idPlan, amount
        } = req.body;
        const user= await User.findByPk(idUser)
        if (!user) return res.status(400).json({error:"Usuario no existe"})
        const plan=await Plan.findByPk(idPlan)
        if (!plan) return res.status(400).json({error:"Plan no existe"})
        const bought = await Bought.findOne({
          where: {
            UserIdUser: idUser,
            PlanIdPlan: idPlan,
          },
        });
        if (bought) return res.status(400).json({error:"Usuario ya compro este plan"})
        await Bought.create({
          UserIdUser: idUser,
          PlanIdPlan: idPlan,
          amount
        });
        return res.send('Compra guardada')
      } catch (error) {
          console.log(error)
        res.status(500).json({ error: error.message });
      }
    }
module.exports=postBought