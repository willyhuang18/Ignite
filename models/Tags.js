const { Schema, Types } = require('mongoose');

// Schema to create tag model
const tagSchema = new Schema(
  // define properties
  {
    tagId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    tagName: {
      type: String,
      required: true,
      maxLength: 280,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = tagSchema;