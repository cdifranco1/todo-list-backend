const db = require('../../data/dbConfig')

module.exports = {
  addTask,
  findBy,
  getAllByID,
  updateTask,
  deleteTask,
  batchDeleteCompleted
}

function findBy(filter, value){
  return db("tasks")
          .where(filter, value)
}

function getAllByID(userId){
  return db("tasks")
          .where({ userId })
}

function addTask(task){
  console.log(task)
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
  console.log(userId)
  return db("tasks")
          .where('userId', userId)
          .andWhere('completed', true)
          .del()
}

