/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Experience', (table) => {
    table.integer('id', 10).unique().primary();
    table.string('company');
    table.string('position');
    table.timestamp('start_date');
    table.timestamp('end_date');
    table.string('person_in_charge');
    table.integer('contact');
    table.timestamps();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Experience');
};
