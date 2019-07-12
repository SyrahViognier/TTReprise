module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'ttreprise',
    user: process.env.DB_USER || 'ttreprise',
    password: process.env.DB_PASS || 'ttreprise',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './ttreprise.sqlite'
    }
  },
  authetication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
