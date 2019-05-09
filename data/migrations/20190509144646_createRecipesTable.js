
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', tbl => {
    tbl.increments();

    tbl
      .string('name')
      .notNullable()
      .unique()
      
    tbl
      .integer('dish_id')
        .foreign('dish_id')
        .unsigned()
        .references('id')
        .inTable('dish')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
