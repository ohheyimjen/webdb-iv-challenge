// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './recipe_book.db'
    }
  },
  migrations: {
    directory: './data/migrations'
  },
  seeds: {
    directory: './data/seeds'
  },
  pool: {
    afterCreate: (conn,done) => {
      conn.run(('PRAGMA foreign_keys = ON', done));
    }
  }
  
};
