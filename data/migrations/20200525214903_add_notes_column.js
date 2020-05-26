
exports.up = function(knex) {
  return knex.schema.table('tasks', (tbl) => {
    tbl.text('details')
  })
};

exports.down = function(knex) {
  return knex.schema.table('tasks', (tbl) => {
    tbl.dropColumn('details')
  })
};
