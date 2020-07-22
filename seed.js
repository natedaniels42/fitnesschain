const mongoose = require('mongoose');
const db = require('./models');

const users = [
  {firstName: 'Nate',
  lastName: 'Daniels',
  email: 'n@d.com'},
  {firstName: 'Sabantu',
  lastName: 'Yusuf',
  email: 's@y.com'},
  {firstName: 'Zach',
  lastName: 'Milan',
  email: 'z@m.com'}
];

db.User.deleteMany({}, (err, deletedUsers) => {
  if (err) return console.log(err);
  console.log('Deleted: ', deletedUsers);
  users.forEach(user => {
    db.User.create(user, (err, createdUser) => {
      if (err) return console.log(err);
      console.log('Created: ', createdUser);
    })
  })
})