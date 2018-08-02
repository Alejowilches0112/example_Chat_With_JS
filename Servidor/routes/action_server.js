var router = require('express').Router;
var service = require('../controller/server')

router.get('/action_serve', (req,res,next) => {
    service();
});

module.exports = router;