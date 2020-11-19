var express = require('express');
var exphbs  = require('express-handlebars');
var port = process.env.PORT || 3000
var bodyParser = require('body-parser');

var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('assets'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
 
app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
    res.render('home');
});


app.post("/detail", (req, res) => {
    res.render('detail');
  });

app.listen(port);
console.log('app running in port: ', port);