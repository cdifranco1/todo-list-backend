const db = require('../../data/dbConfig')

module.exports = {
  addTask,
  findBy,
  getAll,
  updateTask,
  deleteTask,
  batchDeleteCompleted
}

function findBy(filter, value){
  return db("tasks")
          .where(filter, value)
}

function getAll(){
  return db("tasks")
}

function addTask(task){
  return db("tasks")
          .insert(task, ['id'])
          .then(([{ id }]) => {
            return findBy('id', id).first()
    })
}

function updateTask(id, task){
  return db("tasks")
          .where('id', id)
          .update(task, ['id'])
          .then(([{ id }]) => {
            return findBy('id', id).first()
          })
}

function deleteTask(id){
  return db("tasks")
          .where('id', id)
          .del()
}

function batchDeleteCompleted(userId){
  return db("tasks")
          .where('userId', userId)
          .andWhere('completed', true)
          .del()
}

