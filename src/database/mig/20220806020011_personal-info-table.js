/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Personal_info', (table) => {
    table.integer('id', 10).unique().primary().notNullable();
    table.string('name').notNullable();
    table.string('secondName');
    table.string('lastName').notNullable();
    table.string('secondLastName');
    table.string('email').unique().notNullable();
    table.string('linkedIn');
    table.string('region');
    table.bigInteger('phone').unique();
    table.string('portfolio').unique();
    table.text('about');
    table.integer('user_id', 10).unique().notNullable();
    table.timestamps();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Personal_info');
};
