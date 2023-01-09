/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Skills', (table) => {
    table.integer('id', 10).unique().primary().notNullable();
    table.string('name').notNullable();
    table.string('proficiency');
    table.integer('person_id').notNullable();
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Skills');
};
