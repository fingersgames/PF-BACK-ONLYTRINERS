const { Router } = require("express")
const getPlans = require('../controllers/getPlans')
const getPlanDetail = require('../controllers/getPlanDetail')
const getUsers = require('../controllers/getUsers')
const getUserDetail = require('../controllers/getUserDetail')
const postUserLogin = require('../controllers/postUserLogin')
const getSearch = require('../controllers/getSearch')
const postUser = require('../controllers/postUser')
const postPlan = require('../controllers/postPlan')
const updatePlan = require('../controllers/updatePlan')
const updateUser = require('../controllers/updateUser')
const deleteLogicUser = require('../controllers/deleteLogicUser')
const deleteUser = require('../controllers/deleteUser')
const deleteLogicPlan = require('../controllers/deleteLogicPlan')
const deletePlan = require('../controllers/deletePlan')
const postBought = require('../controllers/postBought')


const postCompra = require("../controllers/postCompra") //Import


const router = Router()
router.post('/checkout', postCompra) //enrutado
router.get('/plans',getPlans)
router.get('/plan/:idPlan',getPlanDetail)
router.get('/users',getUsers)
router.get('/user/:idUser',getUserDetail)
router.get('/search',getSearch)
router.post('/plan',postPlan)
router.post('/login/',postUserLogin)
router.post('/user/',postUser)
router.post('/bought',postBought)
router.put('/plan',updatePlan)
router.put('/user',updateUser)
router.delete('/user',deleteLogicUser)
router.delete('/userdelete',deleteUser)
router.delete('/plan',deleteLogicPlan)
router.delete('/plandelete',deletePlan)
module.exports = router;


