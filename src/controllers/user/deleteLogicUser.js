const { User,Plan} = require('../../db');

const deleteLogicUser = async (req, res) => {
  try {
    console.log('---------------------------------------------------------------');
    const { idUser } = req.query;
    const user = await User.findByPk(idUser);
    if (!user) {
      return res.status(404).json({ message: 'El usuario no existe' });
    }
    const planes=await Plan.findAll({where:{idUser:idUser}})
    
    const updatePlanPromises = planes.map(async (plan) => {
      plan.isActive = false;
      return plan.save();
    });

    await Promise.all(updatePlanPromises);
    // Eliminación lógica del usuario
    
    user.isActive = false
    await user.save();

    res.send('Usuario eliminado');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
};

module.exports = deleteLogicUser;