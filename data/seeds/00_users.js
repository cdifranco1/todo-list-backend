
exports.seed = function(knex) {
  return knex('tasks').del()
    .then(() => {
      return knex('users').del()
        .then(() => {
            return knex('users').insert([
              {id: 1, username: 'charlie', password: "pass"},
              {id: 2, username: 'charlie2', password: "pass"},
              {id: 3, username: 'charlie3', password: "pass"}
            ])
        })
    })
};
