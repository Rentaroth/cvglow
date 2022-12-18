/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Experience', (table) => {
    table.integer('id', 10).unique().primary().notNullable();
    table.string('company').notNullable();
    table.string('position').notNullable();
    table.timestamp('start_date');
    table.timestamp('end_date');
    table.string('person_in_charge');
    table.integer('contact').notNullable();
    table.integer('person_id').unique().notNullable();
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
