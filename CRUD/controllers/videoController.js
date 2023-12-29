import Video from '../model/videoSchema.js'

export const addVideo = async (req , res ) => {
    const newVideo = new Video({
        userId : req.user.id,
        ...req.body
    });
    try {
        const savedVideo = await newVideo.save()
        res.status(200).json(savedVideo)
    } catch (error) {
        console.log(error)
    }
}