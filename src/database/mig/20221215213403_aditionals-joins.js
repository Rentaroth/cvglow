/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('Aditionals', (table) => {
    table.foreign('education_id').references('id').inTable('Education');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('Aditionals', (table) => {
    table.dropForeign('education_id');
    table.dropColumn('education_id');
  })
};
