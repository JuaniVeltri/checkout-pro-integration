var express = require('express');
var exphbs  = require('express-handlebars');
var port = process.env.PORT || 3000
var bodyParser = require('body-parser');
const mercadopago = require ('mercadopago');


mercadopago.configure({
  access_token: 'ACCESS_TOKEN'
});

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
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.transactionAmount),
        quantity: Number(req.body.quantity),
      }
    ]
  };

  mercadopago.preferences.create(preference)
    .then(function(response){
      res.render('detail', {
        post: {
          description: preference.items[0].title,
          quantity: preference.items[0].quantity,
          transactionAmount: preference.items[0].unit_price * preference.items[0].quantity,
          id: response.body.id,
          init_point: response.body.init_point,
        }
      });
    }).catch(function(error){
      console.log(error);
    });
  });

app.listen(port);
console.log('app running in port: ', port);