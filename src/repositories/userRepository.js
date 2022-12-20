const BaseRepository = require('./baseRepository');

class UserRepository extends BaseRepository {
  constructor() {
    super('User');
  }

  async getUserWithJoins(id) {
    if (id) {
      const result = await this.db
        .select('*')
        .from(this.table)
        .where('id', id)
        .join(this.table + '.id', '=', 'Personal_info.user_id')
        .options({ nestTables: true })
        .first();
      return result;
    }
    const result = await this.db
      .select('*')
      .from(this.table)
      .join('Personal_info', this.table + '.id', '=', 'Personal_info.user_id')
      .options({ nestTables: true })
      .first();
    return result;
  }
}

module.exports = UserRepository;
