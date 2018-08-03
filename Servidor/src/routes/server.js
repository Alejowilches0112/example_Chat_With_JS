const router = require('express').Router();

router.get('/server', (req, res, next) => {
    res.redirect('https://img.adnerp.net/')
   next();
});

module.exports = router;