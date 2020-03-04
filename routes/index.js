const express = require('express'); 
const router = express.Router(); 

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home'
    });
});


router.get('/events', (req, res) => {
    res.render('events', {
        title: 'Events'
    });
});


module.exports = router;