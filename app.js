const express = require('express'); 
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express(); 

/* Middleware Binding*/
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json()); 
app.use('/public', express.static('public')); 
app.use('/', routes); 

/* Assignments name => value*/
app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 
app.set('partials', __dirname + '/views/partials'); 

app.listen(process.env.PORT || 3000); 

