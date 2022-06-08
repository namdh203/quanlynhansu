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
    "username": "root",
    "password": "123456",
    "database": "quanlynhansu",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

module.exports = connection;
