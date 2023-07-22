const {Plan, Video } = require('../../db');

const deleteLogicPlan = async (req, res) => {
  try {
    console.log('---------------------------------------------------------------');
    const { idPlan } = req.query;

    const plan = await Plan.findByPk(idPlan);
    console.log(idPlan)
    if (!plan) {
      return res.status(402).json({ message: 'El plan no existe' });
    }
    plan.isActive = false
    await plan.save();
    res.send('Plan eliminado');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al eliminar el plan' });
  }
};

module.exports = deleteLogicPlan;