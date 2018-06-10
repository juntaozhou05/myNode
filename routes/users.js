let express = require('express');
let router = express.Router();

router.all('/list',(req,res)=>{
	res.send("user");
})

module.exports = router;