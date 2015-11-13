var express = require('express')

var app = express()
app.use(express.static('public'))
// new uses




app.use('/*', function(req, res) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile( __dirname +'./public/index.html');
});

var server = app.listen(process.env.PORT || 3000, function (){
	console.log('### Server is listening on PORT: ', server.address().port);
})

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
// app.use('/templates', express.static('templates'));
// app.use(express.static(__dirname + '/public'));
// app.use('/views', express.static('views'));
// app.use('/bower_components', express.static('bower_components'));