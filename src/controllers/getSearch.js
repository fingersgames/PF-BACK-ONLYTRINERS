const { Sequelize } = require("sequelize")
const {Plan,User, Video} = require("../db")

const getSearch= async (req,res)=>{
try {
    const {search}=req.query
    console.log(search)
    // if(!search) return res.status(400).send('Falta Palabra busqueda')
    
    let planes = await Plan.findAll({
      where: {
        [Sequelize.Op.and]: [
          {
            [Sequelize.Op.or]: [
              { title: { [Sequelize.Op.iLike]: `%${search}%` } },
              { tags: { [Sequelize.Op.iLike]: `%${search}%` } },
              { publicDescription: { [Sequelize.Op.iLike]: `%${search}%` } },
              { privateDescription: { [Sequelize.Op.iLike]: `%${search}%` } },
            ]
          },
          { isActive: true }
        ]
      }
    });
    
    if(planes.length===0) {
        return res.send([])
    }
    const updatedPlanes = await Promise.all(planes.map(async (plan) => {
      const video = await Video.findOne({ where: { idPlan: plan.idPlan }, limit: 1 });
      const user = await User.findByPk(plan.idUser);
 
      const videoUrl = video ? video.url : "";
      const newPla = {...plan.dataValues, primerVideoUrl: videoUrl,idUser:user.idUser,userName:user.userName};
      return newPla;
    }));
    return res.json(updatedPlanes);



    return res.json(p)
}
catch(error){
    return res.status(500).json(error.message)
}

}
module.exports=getSearch
