const userRoutetr = (app, fs) => {

    
    const dataPath = './model/trainer.json';

    
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                throw err;
            }

            callback(returnJson ? JSON.parse(data) : data);
        });
    };

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {

        fs.writeFile(filePath, fileData, encoding, (err) => {
            if (err) {
                throw err;
            }

            callback();
        });
    };

   
    app.get('/trainer', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }

            res.send(JSON.parse(data));
        });
    });


    // app.get('/trainer/:id', (req, res) => {

    //     readFile(data => {

    //       
    //         const userId = req.params["id"];
    //         const foundUser = trainees.find((trainees) => user.id == id);
    //         writeFile(JSON.stringify(data, null, 2), () => {
    //             res.status(200).send(`staff id:${userId} updated`);
    //             res.send(JSON.parse(foundUser));
    //         });
    //     },
    //         true);
    // });

    
    app.post('/trainer', (req, res) => {

        readFile(data => {
           
            const newUserId = Date.now().toString();

            
            data[newUserId.toString()] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('new user added');
            });
        },
            true);
    });


    
    app.patch('/trainer/:id', (req, res) => {

        readFile(data => {

           
            const userId = req.params["id"];
            data[userId] = req.body;

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`trainer id:${userId} updated`);
            });
        },
            true);
    });


   
    app.delete('/trainer/:id', (req, res) => {

        readFile(data => {

           
            const userId = req.params["id"];
            delete data[userId];

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`trainer id:${userId} removed`);
            });
        },
            true);
    });
};

module.exports = userRoutetr;