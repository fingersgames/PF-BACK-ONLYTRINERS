const { Router } = require("express")
const getPlans = require('../controllers/getPlans')
const getPlanDetail = require('../controllers/getPlanDetail')
const getUsers = require('../controllers/getUsers')
const getUserDetail = require('../controllers/getUserDetail')
const getSearch = require('../controllers/getSearch')
const postUser = require('../controllers/postUser')
const postPlan = require('../controllers/postPlan')
const updatePlan = require('../controllers/updatePlan')
const updateUser = require('../controllers/updateUser')
const deleteUser = require('../controllers/deleteLogicUser')
const deletePlan = require('../controllers/deletePlan')

const router = Router()

router.get('/plans',getPlans)
router.get('/plan/:idPlan',getPlanDetail)
router.get('/users',getUsers)
router.get('/user/:idUser',getUserDetail)
router.get('/search',getSearch)//por query
router.post('/user',postUser)
router.post('/plan',postPlan)
router.put('/plan',updatePlan)
router.put('/user',updateUser)
router.delete('/plan',deletePlan)
router.delete('/user',deleteUser)

module.exports = router;


