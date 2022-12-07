const UtilitiesRepository = require('../../repositories/utilitiesRepository');

class UtilitiesEntity extends UtilitiesRepository {
  constructor(data) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.created_at = data.createdAt;
    this.updated_at = data.updatedAt;
  }

  async createUtilityEntity() {
    const {
      id,
      name,
      description,
      created_at,
      updated_at,
    } = this;
    const info = {
      id,
      name,
      description,
      created_at,
      updated_at,
    };
    const result = await this.create(info);
    return result;
  }

  async getUtilityEntity() {
    const { id } = this;
    const result = await this.read(id);
    return result;
  }

  async updateUtilityEntity() {
    const {
      id,
      name,
      description,
      updated_at,
    } = this;
    const info = {
      name,
      description,
      updated_at,
    };
    const result = await this.update(id, info);
    return result;
  }

  async deleteUtilityEntity() {
    const { id } = this;
    const result = await this.erase(id);
    return result;
  }
}

module.exports = UtilitiesEntity;