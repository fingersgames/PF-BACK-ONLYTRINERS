const { Router } = require("express")
const getPlans = require('../controllers/plan/getPlans')
const getUsers = require('../controllers/user/getUsers')
const postUserLogin = require('../controllers/user/postUserLogin')
const getSearch = require('../controllers/getSearch')
const deleteUser = require('../controllers/user/deleteUser')
const deletePlan = require('../controllers/plan/deletePlan')
const postBought = require('../controllers/bought/postBought')
const plan = require("./plan.route");
const user = require("./user.route");
const postCompra = require("../controllers/bought/postCompra") //Import
const getBoughtsById = require("../controllers/bought/getBoughtsById")
const router = Router()

router.use("/plan", plan);
router.use("/user", user);

router.get('/checkout', getBoughtsById)
router.post('/checkout', postCompra) //enrutado
router.post('/bought',postBought)
router.get('/search',getSearch)
router.get('/plans',getPlans)
router.delete('/plandelete',deletePlan)
router.get('/users',getUsers)
router.post('/login/',postUserLogin)
router.delete('/userdelete',deleteUser)
module.exports = router;


