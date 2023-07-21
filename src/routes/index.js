const { Router } = require("express")
const getPlans = require('../controllers/getPlans')
const getUsers = require('../controllers/getUsers')
const postUserLogin = require('../controllers/postUserLogin')
const getSearch = require('../controllers/getSearch')
const deleteUser = require('../controllers/deleteUser')
const deletePlan = require('../controllers/deletePlan')
const postBought = require('../controllers/postBought')

const plan = require("./plan.route");
const user = require("./user.route");

const postCompra = require("../controllers/postCompra") //Import

const router = Router()

router.use("/plan", plan);
router.use("/user", user);

router.post('/checkout', postCompra) //enrutado
router.post('/bought',postBought)
router.get('/search',getSearch)
router.get('/plans',getPlans)
router.delete('/plandelete',deletePlan)
router.get('/users',getUsers)
router.post('/login/',postUserLogin)
router.delete('/userdelete',deleteUser)
module.exports = router;


