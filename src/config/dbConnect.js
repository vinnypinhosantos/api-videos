import mongoose from "mongoose"

const db_pass = process.env.DB_PASS

mongoose.connect('mongodb+srv://vinicius:admin-123@vinicius.kuw0p3p.mongodb.net/api-videos')

let db = mongoose.connection

export default db