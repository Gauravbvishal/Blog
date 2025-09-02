const express=require('express')
const router=express.Router()
const blogController=require('../controllers/createblog')
const bloglogin=require('../controllers/loginController')

router.get('/login',bloglogin.getlogin)
router.post('/login',bloglogin.postlogin)
router.get('/',blogController.blogPage)
router.post('/blog',blogController.getData)
router.get('/showblog',blogController.sendData)
router.get('/blog/:id',blogController.shows)
router.get('/delete/:id',blogController.delete)


module.exports=router
