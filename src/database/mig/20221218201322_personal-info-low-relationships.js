/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  knex.schema.alterTable('Education', (table) => {
    table.foreign('person_id').references('id').inTable('Personal_info');
  });
  knex.schema.alterTable('Languages', (table) => {
    table.foreign('person_id').references('id').inTable('Personal_info');
  });
  knex.schema.alterTable('Skills', (table) => {
    table.foreign('person_id').references('id').inTable('Personal_info');
  });
  knex.schema.alterTable('Tech_skills', (table) => {
    table.foreign('person_id').references('id').inTable('Personal_info');
  });
  knex.schema.alterTable('References', (table) => {
    table.foreign('person_id').references('id').inTable('Personal_info');
  });
  knex.schema.alterTable('Experience', (table) => {
    table.foreign('person_id').references('id').inTable('Personal_info');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  knex.schema.alterTable('Education', (table) => {
    table.dropForeign('person_id');
    table.dropColumn('person_id');
  });
  knex.schema.alterTable('Languages', (table) => {
    table.dropForeign('person_id');
    table.dropColumn('person_id');
  });
  knex.schema.alterTable('Skills', (table) => {
    table.dropForeign('person_id');
    table.dropColumn('person_id');
  });
  knex.schema.alterTable('Tech_skills', (table) => {
    table.dropForeign('person_id');
    table.dropColumn('person_id');
  });
  knex.schema.alterTable('References', (table) => {
    table.dropForeign('person_id');
    table.dropColumn('person_id');
  });
  knex.schema.alterTable('Experience', (table) => {
    table.dropForeign('person_id');
    table.dropColumn('person_id');
  });
};
