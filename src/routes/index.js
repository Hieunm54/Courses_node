//! o route tgi dung use, NOT get or post

import newsRouter from './news.route.js';
import siteRouter from './site.route.js';
import courseRoute from './course.route.js';

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', courseRoute);
    app.use('/', siteRouter);

    // app.get('/',)
}

export default route;
