const BaseRepository = require('./baseRepository');

class PersonalInfoRepository extends BaseRepository {
  constructor() {
    super('PersonalInfo');
  }

  async createInfo(data) {
    try {
      const result = await this.create(data);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async getInfo(id) {
    try {
      const result = await this.read(id);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async editInfo(id, data) {
    try {
      const result = await this.update(id, data);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async eraseInfo(id) {
    try {
      const result = await this.erase(id);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = PersonalInfoRepository;
