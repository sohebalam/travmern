import express from "express"
import mongoose from "mongoose"
import connectDB from "./db.js"
import dotenv from "dotenv"
import User from "./models/User.js"
import userRouter from "./routes/userRoute.js"
import courseRouter from "./routes/courseRoute.js"
// import bookRouter from "./routes/bookRoute.js"
import error from "./middleware/errorHandler.js"

dotenv.config({ path: "./config.env" })

const app = express()





connectDB()

// pass body data

app.use(express.json())

// Routes

app.use("/api/users", userRouter)
app.use("/api/course", courseRouter)
// app.use("/api/book", bookRouter)

// Erorr Middleware
app.use(error.errorHandler)

// server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is here!!! ${PORT}`)
})
