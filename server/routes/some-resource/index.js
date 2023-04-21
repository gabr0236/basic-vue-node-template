import express from 'express';
import * as controller from '../../controllers/controller.js';

const someResourceRouter = express.Router();

// middleware that is specific to this router
someResourceRouter.use((req, res, next) => {
	console.log('hello, im the some-resources middleware!👋😎');
	next();
});

someResourceRouter.get('/some-resources', controller.getAll);
someResourceRouter.get(`/some-resources/:id`, controller.getById);
someResourceRouter.post(`/some-resources`, controller.create);

export { someResourceRouter };
