import express from 'express';
const siteRoute = express.Router();

import SiteController from '../app/controllers/SiteController.js';
const siteController = new SiteController();

siteRoute.use('/sponsors', siteController.sponsors);
siteRoute.use('/search', siteController.search);
siteRoute.use('/', siteController.index);

export default siteRoute;
