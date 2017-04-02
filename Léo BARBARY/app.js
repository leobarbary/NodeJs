var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/') {
        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }

    res.end();

var routes = require('./routes/index');
				app.use('/', routes);

				app.use(session({
				  cookieName: 'session',
				  secret: 'keyboard cat',
				  resave: false,
				  saveUninitialized: false
				}));

				app.use(passport.initialize());
				app.use(passport.session());

var Account = require('./models/account');
				passport.use(new LocalStrategy(Account.authenticate()));

				passport.serializeUser(Account.serializeUser());
				passport.deserializeUser(Account.deserializeUser());


});
server.listen(8080);