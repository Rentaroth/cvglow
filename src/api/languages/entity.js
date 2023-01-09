const { LanguagesRepository } = require('../../repositories');

class LanguagesEntity extends LanguagesRepository {
  constructor(data) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.level = data.level;
    this.person_id = data.personId;
    this.created_at = data.createdAt;
    this.updated_at = data.updatedAt;
  }

  async createLanguagesEntity() {
    const {
      id,
      name,
      level,
      person_id,
      created_at,
      updated_at,
    } = this;
    const info = {
      id,
      name,
      level,
      person_id,
      created_at,
      updated_at,
    }
    const result = await this.create(info);
    return result;
  }

  async getLanguagesEntity() {
    const { id } = this;
    const result = await this.read(id);
    return result;
  }

  async updateLanguagesEntity() {
    const {
      id,
      name,
      level,
      updated_at,
    } = this;
    const info = {
      name,
      level,
      updated_at,
    };
    const result = await this.update(id, info);
    return result;
  }

  async deleteLanguagesEntity() {
    const { id } = this;
    const result = await this.delete(id);
    return result;
  }
}

module.exports = LanguagesEntity;