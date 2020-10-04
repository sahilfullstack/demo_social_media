

const router = require('express').Router();

router.use('/users', require('./usersRouter'));

module.exports = router;
