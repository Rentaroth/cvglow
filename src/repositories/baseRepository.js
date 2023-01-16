class BaseRepository {
  db = require('../database');
  constructor(table) {
    this.table = table;
  }

  async read(id) {
    if (id) {
      let result = await this.db.select('*').from(this.table).where({ id });
      if(result.length === 0) {
        let error = new Error('Not found in database!');
        result = { message: 'Not found!' };
        error.status = 404;
        throw error;
      }
      return result;
    }
    let result = await this.db.select('*').from(this.table);
    if(result.length === 0) {
      let error = new Error('Not found in database!');
      error.user = { message: 'Not found!' };
      error.status = 404;
      throw error;
    }
    return result;
  }

  async create(data) {
    const result = await this.db(this.table).insert(data);
    return result;
  }

  async update(id, data) {
    const result = await this.db(this.table).update(data).where({ id });
    return result;
  }

  async delete(id) {
    const result = await this.db(this.table).where({ id }).del();
    return result;
  }

  async checkIdentity(id, token) {
    const person = await this.read(id);
    if (!person[0].person_id === token.personId) {
      const error = new Error();
      error.User = 'Can not verify identity, id does not exist';
      error.status = 401;
      throw error;
    }
    return true;
  }
}

module.exports = BaseRepository;
