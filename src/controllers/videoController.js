import videos from "../models/Video.js"

class VideoController {

    static listarVideos = (req, res) => {
        videos.find((err, videos) => {
            res.status(200).json(videos)
        })
    }

    static cadastrarVideos = (req, res) => {
        let video = new videos(req.body)
        
        video.save((err) => {
            if (!err) {
                res.status(201).send(video.toJSON())
            } else {
                res.status(500).send({message: `${err.message} - erro ao cadastrar novo video`})
            }
        })
    }
}

export default VideoController