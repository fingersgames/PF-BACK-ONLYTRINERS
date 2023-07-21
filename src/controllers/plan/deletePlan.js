const {Plan, Video } = require('../../db');

const deletePlan = async (req, res) => {
  try {
    console.log('---------------------------------------------------------------');
    const { idPlan } = req.query;

    const plan = await Plan.findByPk(idPlan);
    console.log(idPlan)
    if (!plan) {
      return res.status(402).json({ message: 'El plan no existe' });
    }

    await Video.destroy({ where: { idPlan: idPlan } });
    await Plan.destroy({ where: { idPlan: idPlan } });

    res.send('Plan eliminado');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al eliminar el plan' });
  }
};

module.exports = deletePlan;