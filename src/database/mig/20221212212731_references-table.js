/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('References', (table) => {
    table.integer('id', 10).unique().primary().notNullable();
    table.string('name').notNullable();
    table.string('last_name').notNullable();
    table.string('profession').notNullable();
    table.string('company');
    table.string('country').notNullable();
    table.string('city');
    table.string('region').notNullable();
    table.integer('phone').notNullable();
    table.integer('person_id').unique().notNullable();
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
