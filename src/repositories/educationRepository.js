const BaseRepository = require('./baseRepository');

class EducationRepository extends BaseRepository {
  constructor() {
    super('Education');
  }

  async createEducation(data) {
    try {
      const result = await this.create(data);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async getEducation(id) {
    try {
      const result = await this.read(id);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async editEducation(id, data) {
    try {
      const result = await this.update(id, data);
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async eraseEducation(id) {
    try {
      const result = await this.erase(id);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = EducationRepository;