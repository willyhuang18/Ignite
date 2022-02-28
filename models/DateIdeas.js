const { Schema, model } = require('mongoose');

// require schema in tag.js
const tagSchema = require('./Tags');

// Schema to create Thought model
const dateIdeaSchema = new Schema(
  // define properties
  {
    dateIdeaName: {
      type: String, 
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    // populating subdocument Friends
    tags: [tagSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Initialize our User model
const DateIdeas = model('DateIdeas', dateIdeaSchema);

module.exports = DateIdeas;
