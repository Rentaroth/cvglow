/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('User', (table) => {
    table.integer('id', 10).primary().unique().notNullable();
    table.string('user_name').unique().notNullable();
    table.string('password').notNullable();
    table.string('e_mail').unique().notNullable();
    table.timestamps();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('User');
};
