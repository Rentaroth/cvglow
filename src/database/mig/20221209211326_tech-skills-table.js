/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Tech_skills', (table) => {
    table.integer('id', 10).unique().primary().notNullable();
    table.string('name').notNullable();
    table.string('proficiency');
    table.integer('person_id').unique().notNullable();
    table.timestamps();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Tech_skills');
};
