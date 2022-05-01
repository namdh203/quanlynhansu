const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');

const port = 3000;

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.engine('handlebars', engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'handlebars'
}));
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static('public'));

app.use(session({
    key: 'user_sid',
    secret: 'kjsadkjsaflka2u39821uf',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
const router = require('./routers/router');
app.use('/', router);

app.listen(port, () => console.log(`App listening to port ${port}`));
