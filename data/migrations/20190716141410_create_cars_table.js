exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    // creates primary key integer that auto-increments
    tbl.increments();
    // adding columns to table
    tbl
      .string('VIN', 17)
      .notNullable()
      .unique();
    tbl.integer('Year', 4).notNullable();
    tbl.string('Make').notNullable();
    tbl.string('Model').notNullable();
    tbl.integer('Mileage', 7);
    tbl.string('TransmissionType');
    tbl.string('TitleStatus', 24);
  });
};

exports.down = function(knex) {
  // undo creation of Db table
  return knex.schema.dropTableIfExists('cars');
};
