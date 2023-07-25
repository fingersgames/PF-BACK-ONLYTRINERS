const {User} = require('../../db')
const postUser = async (req,res)=>{
    try {
        const {
          idUser,
          userName,
          firstName,
          lastName,
          email,
          password,
          Birthdate,
          nationality,
          sex,
          typeUser
        } = req.body;

        
        const haduserName =await User.count({where:{userName}})
        if(haduserName>0) return res.status(400).json({error:"Usuario ya existe"})
        const hadmail= await User.count({where:{email}})
        if (hadmail>0) return res.status(400).json({error:"Email ya existe"})
        const birthdated= new Date(Birthdate)
    
        const newUser = await User.create({
          idUser,
          userName,
          firstName,
          lastName,
          email,
          password,
          Birthdate:birthdated,
          nationality,
          sex,
          typeUser
        })
        return res.send('User Creado')
      } catch (error) {
          console.log(error)
        res.status(500).json({ error: error.message });
      }
    }
module.exports=postUser
