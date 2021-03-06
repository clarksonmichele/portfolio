var express = require('express');
var router = express.Router();

//home
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Clarkson Accessible Design' });
});

//about
router.get('/about', function(req, res, next) {
    res.render('about', {
        about: "about",
        title: "About Michele"
    });
});

//skills
router.get('/skills', function(req, res, next) {
    res.render('skills', {
        about: "skills",
        title: "Skills"
    });
});

//services
router.get('/services', function(req, res, next) {
    res.render('services', {
        about: "services",
        title: "Services"
    });
});

//contact
router.get('/contact', function(req, res, next) {
    res.render('contact', {
        about: "contact",
        title: "Contact Michele"
    });
});


module.exports = router;
