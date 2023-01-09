const { ExperienceRepository } = require('../../repositories');

class ExperienceEntity extends ExperienceRepository {
  constructor(data) {
    super();
    this.id = data.id;
    this.company = data.company;
    this.position = data.position;
    this.start_date = data.startDate;
    this.end_date = data.endDate;
    this.person_in_charge = data.personInCharge;
    this.contact = data.contact;
    this.person_id = data.personId;
    this.created_at = data.createdAt;
    this.updated_at = data.updatedAt;
  }

  async createExperienceEntity() {
    const {
      id,
      company,
      position,
      start_date,
      end_date,
      person_in_charge,
      contact,
      person_id,
      created_at,
      updated_at,
    } = this;
    const info = {
      id,
      company,
      position,
      start_date,
      end_date,
      person_in_charge,
      contact,
      person_id,
      created_at,
      updated_at,
    };
    const result = await this.create(info);
    return result;
  }

  async getExperienceEntity() {
    const { id } = this;
    const result = await this.read(id);
    return result;
  }

  async updateExperienceEntity() {
    const {
      id,
      company,
      position,
      start_date,
      end_date,
      person_in_charge,
      contact,
      updated_at,
    } = this;
    const info = {
      company,
      position,
      start_date,
      end_date,
      person_in_charge,
      contact,
      updated_at,
    };
    const result = await this.update(id, info);
    return result;
  }

  async deleteExperienceEntity() {
    const { id } = this;
    const result = await this.delete(id);
    return result;
  }
}

module.exports = ExperienceEntity;