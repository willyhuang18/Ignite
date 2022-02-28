const router = require('express').Router();
const {
  getAllDateIdeas,
  createDateIdeas,
  getSingleDateIdeasById,
  addTag,
  deleteTag,
} = require('../../controllers/dateIdeasController');

// /api/dateIdea
router.route('/')
  .get(getAllDateIdeas)
  .post(createDateIdeas);

// /api/dateIdea/:dateIdea 
router.route('/:dateIdeaId')
  .get(getSingleDateIdeasById);

// // /api/dateIdea/:dateIdeaId/tag
router.route('/:dateIdeaId/tag')
  .post(addTag);

// /api/dateIdea/:dateIdeaId/tag/:tagId
router.route('/:dateIdeaId/tag/:tagId')
  .delete(deleteTag);

// Export module router
module.exports = router;