
exports.seed = function(knex) {
  return knex.raw('TRUNCATE TABLE users RESTART IDENTITY CASCADE')
    .then(() => {
        return knex('users').insert([
          {username: 'charlie', password: "pass"},
          {username: 'charlie2', password: "pass"},
          {username: 'charlie3', password: "pass"}
        ])
    })
};
