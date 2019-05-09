
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shopping_list', tbl => {
    tbl.integer('ingredient_id');

    tbl
      .foreign('ingredient_id')
      .reference('id')
      .unsigned()
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl.integer('recipe_id')
      .foreign('recipe_id')
      .references('id')
      .unsigned()
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl.float('amount')
      .unsigned()
      .notNullable()

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shopping_list');
};
