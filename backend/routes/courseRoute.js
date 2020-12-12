import express from "express"
import asyncHandler from "express-async-handler"
import authMiddlware from "../middleware/authMiddleware.js"
import Course from "../models/course.js"
const courseRouter = express.Router()

//Create Course
courseRouter.post(
  "/",

  asyncHandler(async (req, res) => {
    try {
      const course = await Course.create(req.body)
      res.status(200)
      console.log(course)
      res.json(course)
    } catch (error) {
      res.status(500)
      throw new Error("courses not created")
    }
  })
)
courseRouter.get(
  "/",

  asyncHandler(async (req, res) => {
    try {
      const course = await Course.find({}).sort({ date: -1 })
      res.status(200)
      console.log(course)
      res.json(course)
    } catch (error) {
      res.status(500)
      throw new Error("there are no courses")
    }
  })
)
courseRouter.put(
  "/:id",

  authMiddlware,
  asyncHandler(async (req, res) => {
    // res.send(req.params.id)
    const course = await Course.findById(req.params.id)

    if (course) {
      const updatedCourse = await Course.findOneAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      )
      res.status(200)
      res.json(updatedCourse)
    } else {
      res.status(401)
      throw new Error("Server error")
    }
  })
)

courseRouter.delete(
  "/:id",

  // authMiddlware,
  asyncHandler(async (req, res) => {
    try {
      const updatedCourse = await Course.findByIdAndDelete(req.params.id)
      res.status(200).json({ success: true })
      res.send(course)
      res.json(updatedCourse)
    } catch (error) {
      res.json(error)
    }
  })
)

export default courseRouter
