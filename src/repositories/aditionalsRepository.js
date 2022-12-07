const BaseRepository = require('./baseRepository');

class AditionalsRepository extends BaseRepository {
  constructor() {
    super('aditionals');
  }
}

module.exports = AditionalsRepository;