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

        connection.query('SELECT * FROM job_position', (err, rows) => {
            if (!err) {
                res.render('job-position', { rows });
            } else {
                res.render('job-position');
            }
        });
    } else {
        res.redirect('/login');
    }
}

exports.form = (req, res) => {
    if (req.session['user']) {
        res.render('add-job-position');
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
    var sql = "INSERT INTO job_position (name, description, code) VALUES ('" + name + "', '" + description + "', '" + code + "')";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/job-position');
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
    var sql = "DELETE FROM job_position where id = " + id;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/job-position');
    });
}
