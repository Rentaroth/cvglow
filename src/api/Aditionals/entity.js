const { AditionalsRepository } = require('../../repositories');

class AditionalsEntity extends AditionalsRepository {
  constructor(data) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.created_at = data.createdAt;
    this.updated_at = data.updatedAt;
  }

  async createAditionalsEntity() {
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

  async getAditionalsEntity() {
    const { id } = this;
    const result = await this.read(id);
    return result;
  }

  async updateAditionalsEntity() {
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

  async deleteAditionalsEntity() {
    const { id } = this;
    const result = await this.delete(id);
    return result;
  }
}

module.exports = AditionalsEntity;