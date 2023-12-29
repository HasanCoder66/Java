import Video from '../model/videoSchema.js'

// export const addVideo = async (req, res) => {
//     try {
//         // Check if req.user is defined before accessing its properties
//         const userId = req.user ? req.user.id : null;

//         const newVideo = new Video({
//             userId: userId, // Set userId to the actual user ID or null
//             ...req.body
//         });

//         const savedVideo = await newVideo.save();
//         res.status(200).json(savedVideo);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };


export const addVideo = async (req , res ) => {
    const newVideo = new Video({
        userId : req.body.userId,
        ...req.body
    });
    try {
        const savedVideo = await newVideo.save()
        res.status(200).json(savedVideo)
    } catch (error) {
        console.log(error)
    }
}