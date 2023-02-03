const router = require('express').Router();

const userRoutes = require('./user-routes');
const wellRoutes = require('./well-routes');
const wellDataRoutes = require('./well-data-routes');


router.use('/user', userRoutes);
router.use('/well', wellRoutes);
router.use('/wellData', wellDataRoutes);

module.exports = router;