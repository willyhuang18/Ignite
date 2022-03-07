const db = require('../config/connection');
const { GoalsForPartner, Questionnaire, QuestionOfTheDay } = require('../models');

const goalsForPartnerData = require('./goalsForPartnerData.json');
const questionnaireData = require('./questionnaireData.json');
const questionOfTheDayData = require('./questionOfTheDayData.json');


db.once('open', async () => {
  try {
  // clean database
  await GoalsForPartner.deleteMany({});
  await Questionnaire.deleteMany({});
  await QuestionOfTheDay.deleteMany({});

  // bulk create each model
  await GoalsForPartner.insertMany(goalsForPartnerData);
  await Questionnaire.insertMany(questionnaireData);
  await QuestionOfTheDay.insertMany(questionOfTheDayData);

  console.log('all done!');
  process.exit(0);
  } catch (err) {
    throw err;
  }
});

