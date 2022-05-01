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

        connection.query('SELECT * FROM employee', (err, rows) => {
            if (!err) {
                res.render('employee', { rows });
            } else {
                res.render('employee');
            }
        });
    } else {
        res.redirect('/login');
    }
}

exports.form = (req, res) => {
    if (req.session['user']) {
        res.render('add-employee');
    } else {
        res.redirect('/login');
    }
}

exports.create = (req, res) => {
    const { code, name, phone_number, email, address, gender, date_of_birth, bank_account, department_id, job_position_id } = req.body;
    let connection = mysql.createConnection({
        host: config.host,
        user: config.username,
        password: config.password,
        database: config.database
    });
    var sql = "INSERT INTO employee (name, code, phone_number, email, address, gender, date_of_birth, bank_account, department_id, job_position_id) VALUES ?";
    connection.query(sql, [[[name, code, phone_number, email, address, gender, date_of_birth, bank_account, department_id, job_position_id]]],(err, result) => {
        if (err) throw err;
        res.redirect('/employee');
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
    var sql = "DELETE FROM employee where id = " + id;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/employee');
    });
}
