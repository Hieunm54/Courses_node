import Course from '../../model/Courses.js'
import {MultiMongooseToObjects} from '../../util/mongoose.js'

class MeController{

    // [GET] /me/profile  
    profile(req, res){
        res.render('me/profile');
    }

    // [GET] /me/stored/courses
    storedCourses(req, res, next){
        Course.find({})
            .then(courses => res.render('me/storedCourses',{
                courses: MultiMongooseToObjects(courses)
            }))
            .catch(next)
    }
}

export default MeController;