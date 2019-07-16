exports.up = function(knex) {
  return knex.schema.renameTable('cars', 'car-dealer');
};

exports.down = function(knex) {
  return knex.schema.renameTable('car-dealer', 'cars');
};
