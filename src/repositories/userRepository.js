const BaseRepository = require('./baseRepository');

class UserRepository extends BaseRepository {
  constructor() {
    super('User');
  }

  async getUserWithJoins(id) {
    if (id) {
      let result;
      await this.db
        .select('*')
        .from(this.table)
        .where(this.table + '.id', id)
        .join('Personal_info', this.table + '.id', '=', 'Personal_info.user_id')
        .options({ nestTables: true })
        .then((data) => {
          data.forEach(item => {
            delete item.User.password;
          })
          console.log(data);
          result = data;
        });
      return result;
    }
    let result;
    await this.db
      .select('*')
      .from(this.table)
      .join('Personal_info', this.table + '.id', '=', 'Personal_info.user_id')
      .options({ nestTables: true })
      .then((data) => {
        data.forEach(item => {
          delete item.User.password;
        })
        result = data;
      });
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
  async deleteUserWithJoins(id) {
    await this.db('Personal_info').where({ user_id: id }).del();
    const result = await this.delete(id);
    return result;
  }
}

module.exports = UserRepository;
