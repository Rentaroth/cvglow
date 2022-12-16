/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Utilities', (table) => {
    table.integer('id', 10).unique().primary();
    table.string('name');
    table.string('description');
    table.integer('education_id', 10);
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Utilities');
};
