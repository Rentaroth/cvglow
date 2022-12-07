const BaseRepository = require('./baseRepository');

class UtilitiesRepository extends BaseRepository {
  constructor() {
    super('Utilities');
  }
}

module.exports = UtilitiesRepository;