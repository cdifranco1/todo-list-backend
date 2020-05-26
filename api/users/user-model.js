const db = require('../../data/dbConfig')

module.exports = {
  addUser,
  findBy,
  getAll,
  deleteUser,
  updateTask
}


function findBy(filter, value){
  return db('users')
          .where(filter, value)
}

function getAll(){
  return db('users')
}

function addUser(user){
  return db('users')
          .insert(user, ['id'])
          .then(([{ id }]) => {
            return findBy('id', id)
    })
}

function updateTask(id, task){
  return db('users')
          .where('id', id)
          .update(task, ['id', 'username', 'password'])
}

function deleteUser(id){
  return db('users')
          .where('id', id)
          .del()
}

