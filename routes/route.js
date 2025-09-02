const express=require('express')
const router=express.Router()
const blogController=require('../controllers/createblog')

router.get('/',blogController.blogPage)
router.post('/blog',blogController.getData)
router.get('/showblog',blogController.sendData)
router.get('/blog/:id',blogController.shows)
 


module.exports=router
