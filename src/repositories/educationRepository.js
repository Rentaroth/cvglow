const BaseRepository = require('./baseRepository');

class EducationRepository extends BaseRepository {
  constructor() {
    super('Education');
  }

  async getEdcationWithJoins(id) {
    const { table } = this;
    const result = await this.db(table)
    .leftJoin('Utilities', { 'Education.id': 'Utilities.education_id' })
    .leftJoin('Aditionals', { 'Education.id': 'Aditionals.education_id' })
    .select('*')
    .where(table + '.id', id)
    .options({ nestTables: true })
    .first();
    return result;
  }
}

module.exports = EducationRepository;
