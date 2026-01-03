const express=require('express');
const {GenerateNEwShortURL,RedirectSite,showStats}=require('../controllers/url');
const { restrictTo } = require('../middlewares/auth');

const router =express.Router();

router.post('/',restrictTo(["ADMIN","NORMAL"]),GenerateNEwShortURL)

router.route('/:id')
.get(RedirectSite)

router.get('/analytics/:id',showStats)



module.exports=router;