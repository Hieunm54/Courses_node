import express from 'express';
const siteRoute = express.Router();

import SiteController from '../app/controllers/SiteController.js';
const siteController = new SiteController();

siteRoute.get('/sponsors', siteController.sponsors);
siteRoute.get('/search', siteController.search);
siteRoute.get('/', siteController.index);

export default siteRoute;
