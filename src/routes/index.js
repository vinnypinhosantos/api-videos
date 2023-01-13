import express from "express"
import videos from "../models/Video.js"

const routes = (app) => {
    app.use(
        express.json(),
        videos
    )
}

export default routes