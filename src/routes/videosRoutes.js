import express from "express"
import VideoController from "../controllers/videoController.js"

const router = express.Router()

router
    .get('/videos', VideoController.listarVideos)
    .post('/videos', VideoController.cadastrarVideos)

export default router