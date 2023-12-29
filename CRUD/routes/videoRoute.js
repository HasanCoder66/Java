import express from 'express'
import {addVideo} from '../controllers/videoController.js'


const videoRouter = express.Router()

// get api
// videoRouter.get('/find/:id')


// post api
videoRouter.post('/addVideo', addVideo)


// put api
// videoRouter.put('/:id')


// delete api
// videoRouter.delete('/:id')


export default videoRouter