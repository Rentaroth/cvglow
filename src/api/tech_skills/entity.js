const { TechSkillsRepository } = require('../../repositories');

class TechSkillsEntity extends TechSkillsRepository {
  constructor(data) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.proficiency = data.proficiency;
    this.created_at = data.createdAt;
    this.updated_at = data.updatedAt;
  }

  async createTechSkillsEntity() {
    const {
      id,
      name,
      proficiency,
      created_at,
      updated_at,
    } = this;
    const info = {
      id,
      name,
      proficiency,
      created_at,
      updated_at,
    }
    const result = await this.create(info);
    return result;
  }

  async getTechSkillsEntity() {
    const { id } = this;
    const result = await this.read(id);
    return result;
  }

  async updateTechSkillsEntity() {
    const {
      id,
      name,
      proficiency,
      updated_at,
    } = this;
    const info = {
      name,
      proficiency,
      updated_at,
    };
    const result = await this.update(id, info);
    return result;
  }

  async deleteTechSkillsEntity() {
    const { id } = this;
    const result = await this.erase(id);
    return result;
  }
}

module.exports = TechSkillsEntity;