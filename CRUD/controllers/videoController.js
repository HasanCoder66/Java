import Video from "../model/videoSchema.js";

// addVideo function ===>
export const addVideo = async (req, res) => {
  const newVideo = new Video({
    userId: req.body.userId,
    ...req.body,
  });
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// getVideo function ===>

export const getVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// updateVideo function ===>

export const updateVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).send("video not available");


    console.log(req.params.id, "req params id");
    console.log(video._id, "video id");

    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
        message : "video updated successfully",
        data : updatedVideo
    });
    // console.log(updatedVideo);
    
  } catch (error) {
    console.log(error);
  }
};

// delete video function ===>

// export const deleteVideo = () => {
//   try {
//   } catch (error) {}
// };
