module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${ req.body.email }! Your user was registered! Have fun!`
    })
  })

  app.post('/login', (req, res) => {
    res.send({
      message: `Hello ${ req.body.email }! Your user has logged in!!`
    })
  })
}
