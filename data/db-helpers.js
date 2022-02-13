const db = require('./dbconfig.js');

//db.select('*').from('users');

//shortcut
db('users');
//resolves to array full of users
//all methods here are promises so they all resolve

db('users').where({ id: 3});
// resolves to array containing any users that match the where

db('users').insert({name: 'josh', age: 14});
//resolves to an array containing the id of a new user

db('users').where({ id: 5 }).update({ age: 77 });
//resolves to the count of records updated

db('users').where({ name: 'josh' }).del();
//deletes user where name is josh, resolves to count of records deleted ???

