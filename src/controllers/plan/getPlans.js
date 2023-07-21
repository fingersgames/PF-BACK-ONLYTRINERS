const { Plan, Video, User} = require("../../db");

const getPlan = async (req, res) => {
  try {
    const planes = await Plan.findAll({where:{isActive:true}});

    const updatedPlanes = await Promise.all(planes.map(async (pla) => {
      const video = await Video.findOne({ where: { idPlan: pla.idPlan }, limit: 1 });
      const user = await User.findByPk(pla.idUser);
      const videoUrl = video ? video.url : null;
      const newPla = {...pla.dataValues, primerVideoUrl: videoUrl,idUser:user.idUser,userName:user.userName};
      return newPla;
    }));


    if (!planes.length) {
      return res.send('No hay plaividades');
    }

    return res.json(updatedPlanes);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = getPlan;