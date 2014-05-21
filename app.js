var express = require('express')

  , OPTIONS = {
    appId: 4341846,
    appSecret: 'l337z3iVaPzoifypmH6I',
    redirectUrl: 'http://localhost:8090',
    port: 8090
  };

var app = express();


app.set('views', __dirname + '/front/view');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/front'));

app.get('/', function(req, res){
    res.render('index', OPTIONS);
});

app.listen( OPTIONS.port );


console.log('Listening for http requests on port ' + OPTIONS.port);