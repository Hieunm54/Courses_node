import express from 'express';
const courseRoute = express.Router();

import CourseController from '../app/controllers/CourseController.js';
const courseController = new CourseController();

courseRoute.post('/store',courseController.store);
courseRoute.put('/:id',courseController.update);
courseRoute.get('/:id/edit',courseController.edit)
courseRoute.get('/create',courseController.create);
courseRoute.get('/:slug',courseController.show);


export default courseRoute;


