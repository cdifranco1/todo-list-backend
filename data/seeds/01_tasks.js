
exports.seed = function(knex) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {task: 'take the dog out', dueDate: "2020-12-31", details: "the dog has to go out every morning at 5am", userId: 1 },
        {task: 'clean my room', dueDate: "2020-12-31", userId: 1 },
        {task: 'get the groceries', dueDate: "2020-12-31", userId: 2 }
      ]);
    });
};
