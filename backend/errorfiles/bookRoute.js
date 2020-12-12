import express from "express"
import asyncHandler from "express-async-handler"
import Book from "../models/Book.js"
const bookRouter = express.Router()

//Create Book
bookRouter.post(
  "/",

  asyncHandler(async (req, res) => {
    try {
      const book = await Book.create(req.body)
      res.status(200)
      res.json(book)
    } catch (error) {
      res.status(500)
      throw new Error(error)
    }
  })
)

export default bookRouter
