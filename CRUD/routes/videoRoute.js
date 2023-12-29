import express from 'express'

const videoRouter = express.Router()

// get api
videoRouter.get('/find/:id')


// post api
videoRouter.post('addVideo')


// put api
videoRouter.put('/:id')


// delete api
videoRouter.delete('/:id')


export default videoRouter