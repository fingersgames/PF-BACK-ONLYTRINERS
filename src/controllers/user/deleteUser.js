const { User} = require('../../db');

const deleteLogicUser = async (req, res) => {
  try {
    console.log('---------------------------------------------------------------');
    const { idUser } = req.query;
    const user = await User.findByPk(idUser);
    if (!user) {
      return res.status(404).json({ message: 'El usuario no existe' });
    }

    // Eliminación del usuario
 
    await User.destroy({ where: { idUser: idUser } });
    await Plan.destroy({ where: { idUser: idUser } });

  
    res.send('Usuario eliminado');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
};

module.exports = deleteLogicUser;
