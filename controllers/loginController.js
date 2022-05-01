const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const mysql = require('mysql');



exports.login = (req, res) => {
	res.render('login', {layout: false});
}

exports.post = (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	let connection = mysql.createConnection({
		host: config.host,
		user: config.username,
		password: config.password,
		database: config.database
	});
	connection.query('SELECT * FROM user WHERE email = ? limit 1', [email], (err, rows) => {
		if (!err) {
			if (password === rows[0].password) {
				const user = {
					email: email
				}
				req.session['user'] = user;
				res.redirect('/');
			} else {
				res.render('login', { layout: false, message: 'Tài khoản không đúng, vui lòng thử lại' });
			}
		} else {
			res.render('login', { layout: false, message: 'Tài khoản không đúng, vui lòng thử lại' });
		}
	});
}

exports.logout = (req, res) => {
	req.session['user'] = null;
	res.redirect('/login');
}
