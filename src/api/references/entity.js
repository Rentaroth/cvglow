const { ReferencesRepository } = require('../../repositories');

class ReferencesEntity extends ReferencesRepository {
  constructor(data) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.last_name = data.lastName;
    this.profession = data.profession;
    this.company = data.company;
    this.country = data.country;
    this.city = data.city;
    this.region = data.region;
    this.phone = data.phone;
    this.person_id = data.personId;
    this.created_at = data.createdAt;
    this.updated_at = data.updatedAt;
  }

  async createReferenceEntity() {
    const {
      id,
      name,
      last_name,
      profession,
      company,
      country,
      city,
      region,
      phone,
      person_id,
      created_at,
      updated_at,
    } = this;
    const info = {
      id,
      name,
      last_name,
      profession,
      company,
      country,
      city,
      region,
      phone,
      person_id,
      created_at,
      updated_at,
    };
    const result = await this.create(info);
    return result;
  }

  async getReferenceEntity() {
    const { id } = this;
    const result = await this.read(id);
    return result;
  }

  async updateReferenceRepository() {
    const {
      id,
      name,
      last_name,
      profession,
      company,
      country,
      city,
      region,
      phone,
      updated_at,
    } = this;
    const info = {
      name,
      last_name,
      profession,
      company,
      country,
      city,
      region,
      phone,
      updated_at,
    };
    const result = await this.update(id, info);
    return result;
  }

  async deleteReferenceEntity() {
    const { id } = this;
    const result = await this.delete(id);
    return result;
  }
}

module.exports = ReferencesEntity;