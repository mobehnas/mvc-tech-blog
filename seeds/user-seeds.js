const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'joey',
    email: 'joey@gmail.com',
    password: 'friends123'
  },
  {
    username: 'chandler',
    email: 'chandler@gmail.com',
    password: 'friends123'
  },
  {
    username: 'ross',
    email: 'ross@gmail.com',
    password: 'friends123'
  },
  {
    username: 'monica',
    email: 'monica@gmail.com',
    password: 'friends123'
  },
  {
    username: 'rachel',
    email: 'rachel@gmail.com',
    password: 'friends123'
  },
  {
    username: 'pheobe',
    email: 'pheobe@gmail.com',
    password: 'friends123'
  }
 
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
