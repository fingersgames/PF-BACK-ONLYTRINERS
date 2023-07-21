const { Router } = require("express");
const getUserDetail = require('../controllers/user/getUserDetail')
const postUser = require('../controllers/user/postUser')
const updateUser = require('../controllers/user/updateUser')
const deleteLogicUser = require('../controllers/user/deleteLogicUser')

const router = Router();

router.get('/:idUser',getUserDetail)
router.post('/',postUser)
router.put('/',updateUser)
router.delete('/',deleteLogicUser)

module.exports = router;