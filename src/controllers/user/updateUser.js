const { User, Plan, Video } = require('../../db');

const updateUser = async (req, res) => {
  try {
    console.log('---------------------------------------------------------------');
    const {
      userName,
      firstName,
      lastName,
      email,
      password,
      birthdate,
      nationality,
      sex,
      typeUser,
      idUser
    } = req.body;

    const user = await User.findByPk(idUser);
    if (!user) {
      return res.status(404).json({ message: 'El usuario no existe' });
    }

    const updateUser = {};
    if (userName !== undefined && userName !== '') updateUser.userName = userName;
    if (firstName !== undefined && firstName !== '') updateUser.firstName = firstName;
    if (lastName !== undefined && lastName !== '') updateUser.lastName = lastName;
    if (email !== undefined && email !== '') updateUser.email = email;
    if (password !== undefined && password !== '') updateUser.password = password;
    if (birthdate !== undefined && birthdate !== '') updateUser.birthdate = birthdate;
    if (nationality !== undefined && nationality !== '') updateUser.nationality = nationality;
    if (sex !== undefined && sex !== '') updateUser.sex = sex;
    if (typeUser !== undefined && typeUser !== '') updateUser.typeUser = typeUser;

    await User.update(updateUser, { where: { idUser: idUser } });
    
    res.send('Usuario actualizado');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};

module.exports = updateUser;
