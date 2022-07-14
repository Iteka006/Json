const userRoutetr = require('../controller/trainer');

const appRouter = (app, fs) => {

    
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    
    userRoutetr(app, fs);

};

module.exports = appRouter;