const BaseRepository = require('./baseRepository');

class EducationRepository extends BaseRepository {
  constructor() {
    super('Education');
  }

  async getEdcationWithJoins(id) {
    const { table } = this;
    const Utilities = await this.db('Utilities')
      .select('*')
      .where({ education_id: id });
    const Aditionals = await this.db('Aditionals')
      .select('*')
      .where({ education_id: id });

    const result = await this.db(table)
      .where(table + '.id', id)
      .select('*')
    result[0].Utilities = Utilities;
    result[0].Aditionals = Aditionals;
    return result;
  }

  async deleteEducationWithForeigns(id) {
    await this.db('Utilities').where({ education_id: id }).del();
    await this.db('Aditionals').where({ education_id: id }).del();
    const result = await this.delete(id)
    return result;
  }
}

module.exports = EducationRepository;
