const router = require('express').Router();
const apiRoutes = require('./api');
const userRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;