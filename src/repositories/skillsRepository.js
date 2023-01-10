const BaseRepository = require('./baseRepository');

class SkillsRepository extends BaseRepository {
  constructor() {
    super('Skills');
  }
}

module.exports = SkillsRepository;