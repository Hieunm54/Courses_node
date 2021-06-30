import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Course = new Schema({
    name : {type: String, required: true, default: 'my_course'},
    description : {type: String, max: 255 },
    img : String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

// chú ý là Course(màu xanh lá cây) sẽ được chuyển thành courses(quy định của mongoose -> để ý đặt tên cho trùng)
export default mongoose.model('Course',Course);
