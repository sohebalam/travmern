import express from "express"
import asyncHandler from "express-async-handler"
import Course from "../models/Course.js"

const courseRouter = express.Router()

courseRouter.post(
  "/course",
  asyncHandler(async (req, res) => {
    const course = await Course.create(req.body)
    if (course) {
      res.status(200)
      res.json(course)
    } else {
      res.status(500)
      throw new Error("course creating failed")
    }
  })
)

export default courseRouter
