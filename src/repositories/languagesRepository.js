const BaseRepository = require('./baseRepository');

class LanguagesRepository extends BaseRepository {
  constructor() {
    super('Languages');
  }
}

module.exports = LanguagesRepository;