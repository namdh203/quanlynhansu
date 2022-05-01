const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const mysql = require('mysql');

exports.view = (req, res) => {
    if (req.session['user']) {
        let connection = mysql.createConnection({
            host: config.host,
            user: config.username,
            password: config.password,
            database: config.database
        });

        connection.query('SELECT * FROM department', (err, rows) => {
            if (!err) {
                res.render('department', { rows });
            } else {
                res.render('department');
            }
        });
    } else {
        res.redirect('/login');
    }
}

exports.form = (req, res) => {
    if (req.session['user']) {
        res.render('add-department');
    } else {
        res.redirect('/login');
    }
}

exports.create = (req, res) => {
    const { code, name, description } = req.body;
    let connection = mysql.createConnection({
        host: config.host,
        user: config.username,
        password: config.password,
        database: config.database
    });
    var sql = "INSERT INTO department (name, description, code) VALUES ('" + name + "', '" + description + "', '" + code + "')";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/department');
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    let connection = mysql.createConnection({
        host: config.host,
        user: config.username,
        password: config.password,
        database: config.database
    });
    var sql = "DELETE FROM department where id = " + id;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/department');
    });
}
