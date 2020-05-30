
exports.up = function(knex) {
  return (
    knex.schema.table("tasks", (tbl) => {
      tbl.boolean("completed").defaultTo(false)
    })
  )
};

exports.down = function(knex) {
  return (
    knex.schema.table("tasks", tbl => {
      tbl.dropColumn("completed")
    })
  )
};
