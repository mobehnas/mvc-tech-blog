const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('DATA SYNCED');
  await seedUsers();
  console.log('USER SEEDED');

  await seedPosts();
  console.log('POSTS SEEDS');

  await seedComments();
  console.log('COMMENT SEEDS');

  process.exit(0);
};

seedAll();
