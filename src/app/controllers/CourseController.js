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

    // [GET] /courses/:id/edit 
    edit(req, res,next) {
        Courses.findOne({_id: req.params.id})
            .then(course => res.render('courses/update',{
                course: SingleMongooseToObject(course)
            }))
            .catch(next);
        
    }

    // [PUT] /courses/:id
    update(req, res,next){
        Courses.updateOne({_id: req.params.id},req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);

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