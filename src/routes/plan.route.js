const { Router } = require("express");
const getPlanDetail = require('../controllers/plan/getPlanDetail')
const postPlan = require('../controllers/plan/postPlan')
const updatePlan = require('../controllers/plan/updatePlan')
const deleteLogicPlan = require('../controllers/plan/deleteLogicPlan')

const router = Router();

router.get('/:idPlan',getPlanDetail)
router.post('/',postPlan)
router.put('/',updatePlan)
router.delete('/',deleteLogicPlan)

module.exports = router;