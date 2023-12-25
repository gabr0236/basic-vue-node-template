import express from 'express';
import * as controller from '../controllers/controller.js';

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
	next();
});

router.get('/some-resources', controller.getAll);
router.get(`/some-resources/:id`, controller.getById);
router.post(`/some-resources`, controller.create);

export { router };
