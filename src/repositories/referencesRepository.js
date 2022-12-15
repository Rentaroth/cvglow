const BaseRepository = require('./baseRepository');

class ReferencesRepository extends BaseRepository {
  constructor() {
    super('References');
  }
}

module.exports = ReferencesRepository;