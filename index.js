const _ = require('lodash');

const users = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Charlie' }
];

const names = _.map(users, 'name');
console.log('User names:', names);