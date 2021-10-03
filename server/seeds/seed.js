const db = require('../config/connection');
const { Movie } = require('../models');

const techData = require('./movieData.json');

db.once('open', async () => {
  await Movie.deleteMany({});

  const movies = await Movie.insertMany(movieData);

  console.log('Movies seeded!');
  process.exit(0);
});
