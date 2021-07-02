import express from 'express';
const meRouter = express.Router();

import MeController from '../app/controllers/MeController.js';
const meController = new MeController();

meRouter.get('/profile',meController.profile);
meRouter.get('/stored/courses',meController.storedCourses);

export default meRouter;