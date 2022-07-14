const userRoutetr = require('../controller/trainer');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    userRoutetr(app, fs);

};

module.exports = appRouter;