import mongoose from 'mongoose';
import {MultiMongooseToObjects,SingleMongooseToObject} from '../../util/mongoose.js';
import Course from '../../model/Courses.js';

class SiteController {
    //[GET] /
    index(req, res,next) {
        // res.render('home');
        // ? cách 1: dùng lean - trong TH không chỉnh sửa kết quả queries
        // Course.find({})
        //     .lean() // ! important to remember - read more in doc.txt
        //     .then(courses => {
        //         // let courseObject = mongoose.toObject(courses);
        //         res.render('home', {
        //             courses
        //         })
        //     })
        //     .catch(err => next(err))
        

        // ? cách 2:  toObject - trường hợp có modify kết quả - nhớ và dùng vs object - không phải cả array nhá :))

            Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject());
                res.render('home', {
                    courses: MultiMongooseToObjects(courses)
                })
            })
            .catch(err => next(err))


    }

    //[GET] /sponsors
    sponsors(req, res) {
        res.render('sponsors');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

export default SiteController;
