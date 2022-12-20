/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('References', (table) => {
    table.integer('id', 10).unique().primary();
    table.string('name');
    table.string('last_name');
    table.string('profession');
    table.string('company');
    table.string('country');
    table.string('city');
    table.string('region');
    table.integer('phone');
    table.timestamps();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('References');
};
