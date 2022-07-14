const userRoutest = require('../controller/trainees');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    userRoutest(app, fs);

};

module.exports = appRouter;