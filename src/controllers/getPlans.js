const { Plan, Video, User} = require("../db");

const getPlan = async (req, res) => {
  try {
    const planes = await Plan.findAll();

    const updatedPlanes = await Promise.all(planes.map(async (pla) => {
      const video = await Video.findOne({ where: { idPlan: pla.idPlan }, limit: 1 });
      const user = await User.findByPk(pla.idUser);
      
      const videoUrl = video ? video.url : null;
      const newPla = {...pla.dataValues, primerVideoUrl: videoUrl,idUser:user.idUser,userName:user.userName};
      return newPla;
    }));

    const response = updatedPlanes;

    if (!planes.length) {
      return res.send('No hay plaividades');
    }

    return res.json(response);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = getPlan;