// Require express router
const router = require('express').Router();

// require dateIdeaRoutes modules
const dateIdeasRoutes = require('./dateIdeasRoutes');

// define endpoint `/dateIdeas` to dateIdeaRoutes 
router.use('/dateIdeas', dateIdeasRoutes);

module.exports = router;