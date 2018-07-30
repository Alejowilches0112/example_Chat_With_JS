const router = require('express').Router();

router.get('https://img.adnerp.net/', (req,res,next)=> {
    if(err) return next(err);
    console.log(res.json);
});

module.exports = router;