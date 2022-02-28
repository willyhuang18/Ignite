const connection = require('../config/connection');
const { DateIdeas } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing DateIdeas
  await DateIdeas.deleteMany({});


  // Add courses to the collection and await the results
  await DateIdeas.collection.insertOne({
    dateIdeaName: 'hiking',
    tags: [
      {tagName: 'outdoors'},
      {tagName: '$'},
      {tagName: 'notLongDistance'},
    ],
  });

  // Log out the seed data to indicate what should appear in the database
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
