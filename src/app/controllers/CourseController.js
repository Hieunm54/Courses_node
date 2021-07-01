import Courses from '../../model/Courses.js';

import {SingleMongooseToObject} from '../../util/mongoose.js'


class CourseController{


    // [GET] courses/:slug
    show(req, res,next) {
        const slug = req.params.slug;
        
        Courses.findOne({slug})
        .then(course =>{
            
            console.log(course.name)
            res.render('courses/show', {
                course: SingleMongooseToObject(course)
            })
        })
        .catch(next)
        // express cấm sử dụng `res.send(status, body)` -> dùng dấu + khi nối chuỗi
    }

    // [GET] courses/create
    create(req, res,next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res,next) {
        console.log(req.body.videoID);
        const dataForm = req.body;
        dataForm.img = `http://img.youtube.com/vi/${req.body.videoID}/mqdefault.jpg`;
        const course = new Courses(dataForm);
        course.save()
        .then(() => res.redirect('/'))
        .catch(err => next(err))
        

    }

}

export default CourseController;