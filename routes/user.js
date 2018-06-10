let express = require('express');
let router = express.Router();

router.all('/',(req,res)=>{
	res.send("user")
})

router.all('/list',(req,res)=>{
	//req对象
	//console.log(req);
	//get方式
	console.log("id:"+req.query.id);
	//post方式
	console.log(req.body);
	res.send("list");
})

router.all('/:id',(req,res)=>{
	console.log(req.params.id)
})

module.exports = router;