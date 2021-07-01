import express from 'express';
const courseRoute = express.Router();

import CourseController from '../app/controllers/CourseController.js';
const courseController = new CourseController();

courseRoute.post('/store',courseController.store);

courseRoute.get('/create',courseController.create);
courseRoute.get('/:slug',courseController.show);


export default courseRoute;


