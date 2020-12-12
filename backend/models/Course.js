import mongoose from "mongoose"

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    Number,
  },
  discount: {
    Number,
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tags: {
    type: String,
  },
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

const Course = mongoose.model("Course", courseSchema)

export default Course

// title, price,discount,creator, selectedFile, likeCount, timestamps
