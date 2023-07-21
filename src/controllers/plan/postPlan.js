const {User,Plan,Video} = require('../../db')
const postPlan = async (req,res)=>{
    try {
        const {
          title,
          privateDescription,
          publicDescription,
          price,
          tags,
          videos,
          idUser
        } = req.body; 
          const newPlan = await Plan.create({
            title,
            privateDescription,
            publicDescription,
            price,
            tags,
            idUser
          });

          const us=await User.findByPk(idUser)
          console.log(idUser)
          if (!us) return res.status(406).json({ message: "No existe el usuario" });

          // Asociar los videos al plan
        if (videos && videos.length > 0) {
          const videoPromises = videos.map((video) =>
            Video.create({
              idVideo:video.idVideo,
              url: video.url,
              publico: video.publico,
              description: video.description,
              idPlan:newPlan.idPlan
            })
          );
          await Promise.all(videoPromises);
        }
        res.send('Plan Creado')
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al crear el plan" });
      }
    }
module.exports=postPlan
