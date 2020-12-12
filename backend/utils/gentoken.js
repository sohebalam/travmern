import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config({ path: "../../config.env" })

const genToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  })
}

export default genToken
