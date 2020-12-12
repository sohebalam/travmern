import express from "express"
import User from "../models/User.js"
import asyncHandler from "express-async-handler"
import genToken from "../utils/gentoken.js"

const userRouter = express.Router()

userRouter.post(
  "/register",
  asyncHandler(async (req, res) => {
    try {
      const { firstname, lastName, email, password, location } = req.body
      const userExists = await User.findOne({ email: email })
      if (userExists) {
        throw new Error("User Exists")
      }

      const user = await User.create({
        firstname,
        lastName,
        email,
        password,
        location,
      })
      console.log(user)
      res.json({
        _id: user._id,
        name: user.firstname,
        password: user.password,
        email: user.email,
        token: genToken(user._id),
      })
    } catch (error) {
      console.log(error)
    }
  })
)

userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await user.isPasswordMatch(password))) {
      res.status(200)
      res.json({
        _id: user._id,
        name: user.firstname,
        password: user.password,
        email: user.email,
        token: genToken(user._id),
      })
    } else {
      res.status(401)
      throw new Error("Invalid Credentials")
    }
  })
)

userRouter.put("/update", (req, res) => {
  res.send("update route")
})

userRouter.delete("/:id", (req, res) => {
  res.send("Delete route")
})
userRouter.get("/", (req, res) => {
  res.send("fetch route")
})

export default userRouter
