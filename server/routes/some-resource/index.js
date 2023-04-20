import express from 'express';

const someResourceRouter = express.Router();

// middleware that is specific to this router
someResourceRouter.use((req, res, next) => {
    console.log('hello, im the some-resources middleware!👋')
    next()
});


someResourceRouter.get('/some-resources', (req, res) => {
        console.log(req.params);
        res.status(200);
        res.send("Getting all of 'some resource'");
    }
);

someResourceRouter.get(`/some-resources/:id`, (req, res) => {
    res.status(200);
    res.send(`Getting resource with id: ${req.params.id}, of 'some resource'`);
}
);


export {
    someResourceRouter,
}