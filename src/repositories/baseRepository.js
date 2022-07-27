class BaseRepository {
  db = require('../database');
  constructor() {}

  async read(table, id) {
    if (id) {
      const result = await this.db.select('*').from(table).where({ id });
      return result;
    }
    const result = await this.db.select('*').from(table);
    return result;
  }

  async create(data) {
    const result = await this.db(table).insert(data);
    return result;
  }

  async update(id, data) {
    const result = await this.db(table).update(data).where({ id });
    return result;
  }

  async erase(id) {
    const result = await this.db(table).where({ id }).del();
    return result;
  }
}

module.exports = BaseRepository;