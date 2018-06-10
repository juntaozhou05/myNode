let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:false
}))

app.use(express.static(__dirname+'/public'))

app.use('/user',require('./routes/user.js'))

app.listen(80);






