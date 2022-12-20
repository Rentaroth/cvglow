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
        .options({ nestTables: true });
      return result;
    }
    const result = await this.db
      .select('*')
      .from(this.table)
      .join('Personal_info', this.table + '.id', '=', 'Personal_info.user_id')
      .options({ nestTables: true });
    return result;
  }
  async getUserByUsernameRepo(userName) {
    const result = await this.db(this.table).where({ user_name: userName });
    return result;
  }
  async getUserByEmailRepo(eMail) {
    const result = await this.db(this.table).where({ e_mail: eMail });
    return result;
  }
}

module.exports = UserRepository;
