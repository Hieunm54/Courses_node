import express from 'express';
const newsRouter = express.Router();

import NewsController from '../app/controllers/NewsController.js';
const newsController = new NewsController();

newsRouter.get('/detail', newsController.detail);
newsRouter.get('/', newsController.index);

export default newsRouter;
