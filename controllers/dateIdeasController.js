const { DateIdeas } = require('../models');

module.exports = {
  // Get All Date Ideas
  getAllDateIdeas(req, res) {
    DateIdeas.find()
      // Populate will automatically replace the specified path in the document, with documents from other collections
      // populate will replace the reaction id with the reaction document
      .populate({path: 'tags', select: '-__v'})
      .select('-__v')
      .then((dateIdeasData) => res.json(dateIdeasData))
      .catch((err) => res.status(500).json(err));
  },


    // Create a Date Idea
    createDateIdeas(req, res) {
      DateIdeas.create(req.body)
        .then((dateIdeasData) => res.json(dateIdeasData))
        .catch((err) => res.status(500).json(err));
    },



  // Get a Single Date Idea By Id
  getSingleDateIdeasById(req, res) {
    DateIdeas.findOne({ _id: req.params.dateIdeaId })
      // Populate will automatically replace the specified path in the document, with documents from other collections
      // populate will replace the date idea id with the date id document
      .populate({path: 'tags', select: '-__v'})
      .select('-__v')
      .then((dateIdeasData) =>
        !dateIdeasData
          ? res.status(404).json({ message: 'No date idea with that ID' })
          : res.json(dateIdeasData)
      )
      .catch((err) => res.status(500).json(err));
  },
  
  // Add New Tag
  addTag(req, res) {

    console.log('You are adding a new tag');
    console.log(req.body);

    DateIdeas.findOneAndUpdate(
      { _id: req.params.tagId },
      //  $addToSet operator adds or appends a value to an array, only if the value does not exist in the array
      { $addToSet: { tags: req.body } },
      {new: true},
    )
      .populate({path: 'tags', select: ('-__v')})
      .select('-__v')
      .then((dateIdeasData) =>
        !dateIdeasData
          ? res.status(404).json({ message: 'No date idea with that ID.' })
          : res.json(dateIdeasData)
      )
      .catch((err) => res.status(500).json(err));
  },


  // Delete a Tag
  deleteTag(req, res) {
    DateIdeas.findOneAndUpdate(
      { _id: req.params.dateIdeaId },
      // $pull operator is used to remove all instances of a value from an existing array
      // pulling the subdocument reaction and going into the reaction object and finding reactionId
      // If you set new: true, findOneAndUpdate() will instead give you the object after update was applied.
      { $pull: { reactions: { tagId: req.params.tagId } } },
      {new: true})
      .populate({path: 'reactions', select: '-__v'})
      .select('-__v')
      .then((dateIdeasData) =>
        !dateIdeasData
          ? res.status(404).json({ message: 'No date idea with that ID.' })
          : res.json(dateIdeasData)
      )
      .catch((err) => res.status(500).json(err));
  },
};
