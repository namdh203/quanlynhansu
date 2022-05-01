exports.view = (req, res) => {
    if (req.session['user']) {
        res.render('main');
    } else {
        res.redirect('/login');
    }
}