const { PersonalInfoRepository } = require('../../repositories');

class PersonalInfo extends PersonalInfoRepository {
  constructor(data) {
    super();
    this.id = data.id;
    this.name = data.name;
    this.secondName = data.secondName;
    this.lastName = data.lastName;
    this.secondLastName = data.secondLastName;
    this.email = data.email;
    this.linkedIn = data.linkedIn;
    this.region = data.region;
    this.phone = data.phone;
    this.portfolio = data.portfolio;
    this.created_at = data.createdAt;
    this.updated_at = data.updatedAt;
  }

  async getPersonalInfo() {
    const { id } = this;
    const result = await this.read(id);
    return result;
  }

  async createPersonalInfo() {
    const {
      id,
      name,
      secondName,
      lastName,
      secondLastName,
      email,
      linkedIn,
      region,
      phone,
      portfolio,
      created_at,
      updated_at,
    } = this;

    const info = {
      id,
      name,
      secondName,
      lastName,
      secondLastName,
      email,
      linkedIn,
      region,
      phone,
      portfolio,
      created_at,
      updated_at,
    };
    const result = await this.create(info);
    return result;
  }

  async updatePersonalInfo() {
    const {
      id,
      name,
      secondName,
      lastName,
      secondLastName,
      email,
      linkedIn,
      region,
      phone,
      portfolio,
      updated_at,
    } = this;

    const info = {
      name,
      secondName,
      lastName,
      secondLastName,
      email,
      linkedIn,
      region,
      phone,
      portfolio,
      updated_at,
    };
    const result = await this.update(id, info);
    return result;
  }

  async deletePersonalInfo() {
    const { id } = this;
    const result = await this.delete(id);
    return result;
  }
}

module.exports = PersonalInfo;
