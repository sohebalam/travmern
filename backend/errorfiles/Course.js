import mongoose from "mongoose"
import User from "./User.js"

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    Number,
  },
  discount: {
    Number,
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  timestamps: {
    type: Date,
    default: new Date(),
  },
})

const Course = mongoose.model("courseMessage", courseSchema)

export default Course

// title, price,discount,creator, selectedFile, likeCount, timestamps
