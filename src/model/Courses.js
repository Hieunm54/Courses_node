import mongoose from "mongoose";
import slug from 'mongoose-slug-generator'


mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true, default: "my_course" },
    description: { type: String, max: 255 },
    img: String,
    slug: { type: String, slug: 'name', unique:true },
    videoID: { type: String},
    level: String
  },
  { 
    timestamps: true 
  }
);

// chú ý là Course(màu xanh lá cây) sẽ được chuyển thành courses(quy định của mongoose -> để ý đặt tên cho trùng)
export default mongoose.model("Course", Course);
