export default class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/detail
    detail(req, res) {
        res.send('DETAIL NEWS PAGE');
    }
}
