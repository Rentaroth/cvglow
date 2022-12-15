const BaseRepository = require('./baseRepository');

class PersonalInfoRepository extends BaseRepository {
  constructor() {
    super('Personal_info');
  }
}

module.exports = PersonalInfoRepository;
