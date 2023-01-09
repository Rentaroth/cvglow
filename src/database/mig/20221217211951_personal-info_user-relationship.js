/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('Personal_info', (table) => {
    table.foreign('user_id').references('id').inTable('User');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('Personal_info', (table) => {
    table.dropForeign('user_id');
    table.dropColumn('user_id');
  })
};
