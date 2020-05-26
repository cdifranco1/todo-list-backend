
exports.up = function(knex) {
  return knex.schema
          .createTable('users', (tbl) => {
            tbl.increments('id').primary()
            tbl.string('username', 128).notNullable().unique()
            tbl.string('password', 255).notNullable()
          })
          
          .createTable('tasks', (tbl) => {
            tbl.increments('id').primary()
            tbl.text('task', 128).notNullable()
            tbl.datetime('dueDate')

            tbl.integer('userId').unsigned().notNullable()
            tbl.foreign('userId')
              .references('id')
              .inTable('users')
              .onDelete("CASCADE")
              .onUpdate("CASCADE")
          })
};

exports.down = function(knex) {
  return knex.schema
            .dropTableIfExists('users')
            .dropTableIfExists('tasks')
};
