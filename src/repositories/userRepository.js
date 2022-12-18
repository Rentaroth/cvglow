const BaseRepository = require('./baseRepository');

class UserRepository extends BaseRepository {
  constructor() {
    super('User');
  }
}

module.exports = UserRepository;