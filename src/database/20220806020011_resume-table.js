/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('PersonalInfo', (table) => {
    table.integer('id', 10).unique();
    table.string('name');
    table.string('secondName');
    table.string('lastName');
    table.string('secondLastName');
    table.string('email').unique();
    table.string('linkedIn');
    table.string('region');
    table.bigInteger('phone').unique();
    table.string('portfolio').unique();
    table.timestamps();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('PersonalInfo');
};
