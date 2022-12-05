const BaseRepository = require('./baseRepository');

class PersonalInfoRepository extends BaseRepository {
  constructor() {
    super('PersonalInfo');
  }

  async createInfo(data) {
    const result = await this.create(data);
    return result;
  }

  async getInfo(id) {
    const result = await this.read(id);
    return result;
  }

  async editInfo(id, data) {
    const result = await this.update(id, data);
    return result;
  }

  async eraseInfo(id) {
    const result = await this.erase(id);
    return result;
  }
}

module.exports = PersonalInfoRepository;
