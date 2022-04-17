const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'Add User' });
});

app.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: 'User', users: users });
    //users(1): users(2)
    //(1) is the key being use in ejs/template engine
    //(2) is the users array
});

app.post('/add-user', (req, res, next) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
});

app.listen(3000);