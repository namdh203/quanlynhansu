var connection;


connection = {
  "development": {
    "username": "root",
    "password": "123456",
    "database": "quanlynhansu",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "nam20032003",
    "database": "quanlynhansu",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "URL",
    "dialect": "mysql"
  }
}

module.exports = connection;
