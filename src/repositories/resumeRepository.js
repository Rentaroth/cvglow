const baseRepo = require('./baseRepository');

class ResumeRepository extends baseRepo {
  static instance = null;
  table = 'Files';
  constructor() {}

  static gen() {
    if (instance === null) {
      this.instance = new ResumeRepository();
      return this.instance;
    }
    return this.instance;
  }
}
