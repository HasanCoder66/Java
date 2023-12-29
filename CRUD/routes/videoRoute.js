import express from 'express'
import {addVideo , getVideo , updateVideo , deleteVideo} from '../controllers/videoController.js'


const videoRouter = express.Router()

// get api
videoRouter.get('/find/:id', getVideo)


// post api
videoRouter.post('/addVideo', addVideo)


// put api
videoRouter.put('/:id' , updateVideo)


// delete api
videoRouter.delete('delete/:id' , deleteVideo)


export default videoRouter