const BaseRepository = require('./baseRepository');

class TechSkillsRepository extends BaseRepository {
  constructor() {
    super('Tech_skills');
  }
}

module.exports = TechSkillsRepository;