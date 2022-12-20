const EducationRepository = require('../../repositories/educationRepository');

class EducationEntity extends EducationRepository {
  constructor(data) {
    super();
    this.id = data.id;
    this.title = data.title;
    this.enphasis = data.enphasis;
    this.created_at = data.createdAt;
    this.updated_at = data.updatedAt;
    this.join = data.join;
  }

  async getEducationEntity() {
    const { id, join } = this;
    if(!join || join === 'false') {
      const result = await this.read(id);
      return result;
    } else if (join === 'true'){
      const result = await this.getEdcationWithJoins(id);
      return result;
    }
  }

  async createEducationEntity() {
    const {
      id,
      title,
      enphasis,
      created_at,
      updated_at,
    } = this;
    const info = {
      id,
      title,
      enphasis,
      created_at,
      updated_at,
    }
    const result = await this.create(info);
    return result;
  }

  async updateEducationEntity() {
    const {
      id,
      title,
      enphasis,
      updated_at,
    } = this;

    const info = {
      title,
      enphasis,
      updated_at,
    }

    const result = await this.update(id, info);
    return result;
  }

  async eraseEducationEntity() {
    const { id } = this;

    const result = await this.delete(id);
    return result;
  }
}

module.exports = EducationEntity;
