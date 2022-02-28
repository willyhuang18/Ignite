const connection = require('../config/connection');
const { DateIdeas } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing DateIdeas
  await DateIdeas.deleteMany({});


  // Add courses to the collection and await the results
  await DateIdeas.collection.insertMany([
    {
      dateIdeaName: 'hiking',
      tags: [
        {tagName: 'outdoors'},
        {tagName: '$'},
        {tagName: 'notLongDistance'},
      ],
    },
    {
      dateIdeaName: 'picnic',
      tags: [
        {tagName: 'outdoors'},
        {tagName: '$$'},
        {tagName: 'notLongDistance'},
      ],
    },
    {
      dateIdeaName: 'zoo',
      tags: [
        {tagName: 'outdoors'},
        {tagName: '$$'},
        {tagName: 'notLongDistance'},
      ],
    },
    {
      dateIdeaName: 'make dessert',
      tags: [
        {tagName: 'indoors'},
        {tagName: '$$'},
        {tagName: 'longDistance'},
      ],
    },
    {
      dateIdeaName: 'do the question of the day',
      tags: [
        {tagName: 'indoors'},
        {tagName: '$'},
        {tagName: 'longDistance'},
      ],
    },
]);

  // Log out the seed data to indicate what should appear in the database
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
