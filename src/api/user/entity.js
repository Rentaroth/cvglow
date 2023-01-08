const { UserRepository } = require('../../repositories');

class UserEntity extends UserRepository {
  constructor(data) {
    super();
    this.id = data.id;
    this.user_name = data.userName;
    this.password = data.password;
    this.e_mail = data.eMail;
    this.person_id = data.personId;
    this.created_at = data.createdAt;
    this.updated_at = data.updatedAt;
    this.extend = data.extend;
    this.is_admin = data.isAdmin;
  }

  async createUserEntity() {
    const {
      id,
      user_name,
      password,
      e_mail,
      person_id,
      created_at,
      updated_at,
      is_admin,
    } = this;
    const info = {
      id,
      user_name,
      password,
      e_mail,
      person_id,
      created_at,
      updated_at,
      is_admin,
    };
    const result = await this.create(info);
    return result;
  }

  async getUserEntity() {
    const { id, extend } = this;
    if (!extend) {
      let result;
      await this.read(id)
      .then((data) => {
        data.forEach(item => {
          delete item.password;
        })
        result = data;
      });
      return result;
    }
    const result = await this.getUserWithJoins(id);
    return result;
  }

  async getUserBy() {
    const { user_name, e_mail } = this;
    if (user_name) {
      const result = await this.getUserByUsernameRepo(user_name);
      const lenght = result.length;
      if (lenght === 0) {
        const error = new Error('Incorrect user or password!');
        error.user = { message: 'Incorrect user or password!' };
        error.status = 401;
        throw error;
      }
      return result;
    } else if (e_mail) {
      const result = await this.getUserByEmailRepo(e_mail);
      const lenght = result.length;
      if (lenght === 0) {
        const error = new Error('Incorrect user or password!');
        error.user = { message: 'Incorrect user or password!' };
        error.status = 401;
        throw error;
      }
      return result;
    } else {
      throw new Error('Not enough arguments to log in');
    }
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
