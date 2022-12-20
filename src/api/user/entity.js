const { UserRepository } = require('../../repositories');

class UserEntity extends UserRepository {
  constructor(data) {
    super();
    this.id = data.id;
    this.user_name = data.userName;
    this.password = data.password;
    this.e_mail = data.eMail;
    this.created_at = data.createdAt;
    this.updated_at = data.updatedAt;
  }

  async createUserEntity() {
    const { id, user_name, password, e_mail, created_at, updated_at } = this;
    const info = {
      id,
      user_name,
      password,
      e_mail,
      created_at,
      updated_at,
    };
    const result = await this.create(info);
    return result;
  }

  async getUserEntity() {
    const { id } = this;
    const result = await this.getUserWithJoins(id);
    return result;
  }

  async updateUserEntity() {
    const { id, user_name, password, e_mail, updated_at } = this;
    const info = {
      user_name,
      password,
      e_mail,
      updated_at,
    };
    const result = await this.update(id, info);
    return result;
  }

  async deleteUserEntity() {
    const { id } = this;
    const result = await this.delete(id);
    return result;
  }
}

module.exports = UserEntity;