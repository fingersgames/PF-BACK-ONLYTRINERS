const { User, Plan, Video } = require('../../db');

const updatePlan = async (req, res) => {
  try {
console.log('---------------------------------------------------------------')
    const {
      idPlan,
      title,
      privateDescription,
      publicDescription,
      price,
      tags,
      videos,
      idUser
    } = req.body;
    
    const p=await Plan.findByPk(idPlan)
    if (!p) {
      return res.status(404).json({ message: 'El plan no existe' });
    }
    // Eliminar todos los videos asociados al plan
    
    await Video.destroy({ where: { idPlan: idPlan } });

    // Crear los nuevos videos del plan
    if (videos && videos.length > 0) {
      const videoPromises = videos.map((video) =>
        Video.create({
          idVideo: video.idVideo,
          url: video.url,
          publico: video.publico,
          description: video.description,
          idPlan: idPlan
        })
      );

      await Promise.all(videoPromises);
    }

    // Actualizar los campos del plan
    const updatePlan = {};
    if (title !== undefined && title !== '') updatePlan.title = title;
    if (privateDescription !== undefined && privateDescription !== '') updatePlan.privateDescription = privateDescription;
    if (publicDescription !== undefined && publicDescription !== '') updatePlan.publicDescription = publicDescription;
    if (price !== undefined && price !== '') updatePlan.price = price;
    if (tags !== undefined && tags !== '') updatePlan.tags = tags;

    // Actualizar los campos del plan
    await Plan.update(updatePlan, { where: { idPlan: idPlan } });
    res.send('Plan actualizado');
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: 'Error al actualizar el plan' });
  }
};

module.exports = updatePlan;
