const { Schema, model } = require('mongoose');

const questionOfTheDaySchema = new Schema({
  question: {
    type: String,
    trim: true,
  },
});

const QuestionOfTheDay = model('QuestionOfTheDay', questionOfTheDaySchema);

module.exports = QuestionOfTheDay;
