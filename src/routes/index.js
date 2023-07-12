const { Router } = require("express")
const getPlan = require('../controllers/getPlan')
const getPlanDetail = require('../controllers/getPlanDetail')
const getUsers = require('../controllers/getUsers')
const getUserDetail = require('../controllers/getUserDetail')
const postUser = require('../controllers/postUser')
const postPlan = require('../controllers/postPlan')
const getSearch = require('../controllers/getCountriesName')

const router = Router()

router.get('/plan',getPlan)
router.get('/plan/:idPlan',getPlanDetail)
router.get('/users',getUsers)
router.get('/users/:idUsers',getUserDetail)
router.post('/user',postUser)
router.post('/plan',postPlan)
router.get('/search',getSearch)//por query

module.exports = router;


