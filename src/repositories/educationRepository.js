const BaseRepository = require('./baseRepository');

class EducationRepository extends BaseRepository {
  constructor() {
    super('Education');
  }

  async getEdcationWithJoins(id) {
    const { table } = this;
    const result = await this.db(table)
      .innerJoin('Utilities', table + '.id', '=', 'Utilities.education_id')
      .innerJoin('Aditionals', table + '.id', '=', 'Aditionals.education_id')
      .select('*')
      .where(table + '.id', id)
      .options({ nestTables: true })
      .then((data) => {
        let final = data[0].Education,
          Util = [],
          Adit = [],
          filter = [],
          aditFilter = [];
        data.map((element) => {
          if (!Util[0]) {
            Util.push(element.Utilities);
            filter.push(element.Utilities.id);
            Adit.push(element.Aditionals);
            aditFilter.push(element.Aditionals.id);
          }
          if (!filter.includes(element.Utilities.id)) {
            Util.push(element.Utilities);
            return filter.push(element.Utilities.id);
          }
          if (!aditFilter.includes(element.Aditionals.id)) {
            Adit.push(element.Aditionals);
            console.log(Adit)
            return aditFilter.push(element.Aditionals.id);
          }
        });
        final.Utilities = Util;
        final.Aditionals = Adit;
        return final;
      });
    return result;
  }

  async deleteEducationWithForeigns(id) {
    await this.db('Utilities').where({ education_id: id }).del();
    await this.db('Aditionals').where({ education_id: id }).del();
    const result = await this.delete(id);
    return result;
  }
}

module.exports = EducationRepository;
