const BaseRepository = require('./baseRepository');

class AditionalsRepository extends BaseRepository {
  constructor() {
    super('Aditionals');
  }
}

module.exports = AditionalsRepository;