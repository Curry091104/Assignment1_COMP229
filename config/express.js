let config = require('./env/development'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session');

module.exports = function () {
    let app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));

    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    app.use('/', require('../app/routes/index.server.routes.js'));
    app.use(express.static('./public'));
    app.use(express.static("./node_modules"));

    return app;
};