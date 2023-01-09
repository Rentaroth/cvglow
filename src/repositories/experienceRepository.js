const BaseRepository = require('./baseRepository');

class ExperienceRepository extends BaseRepository {
  constructor() {
    super('Experience');
  }
}

module.exports = ExperienceRepository;