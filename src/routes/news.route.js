import express from 'express';
const newsRouter = express.Router();

import NewsController from '../app/controllers/NewsController.js';
const newsController = new NewsController();

newsRouter.use('/detail', newsController.detail);
newsRouter.use('/', newsController.index);

export default newsRouter;
