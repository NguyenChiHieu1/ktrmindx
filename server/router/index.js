const account = require('./account')
const movie = require('./movie')

const { notFound, errHandler } = require('../middlewares/errHandler')

const initRoutes = (app) => {
    app.use('/api/account', account)
    app.use('/api/movie', movie)

    app.use(notFound)
    app.use(errHandler)
}

module.exports = initRoutes