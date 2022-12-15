class BaseRepository {
  db = require('../database');
  constructor(table) {
    this.table = table;
  }

  async read(id) {
    if (id) {
      const result = await this.db.select('*').from(this.table).where({ id });
      return result;
    }
    const result = await this.db.select('*').from(this.table);
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
}

module.exports = BaseRepository;