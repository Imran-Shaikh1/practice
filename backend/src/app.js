const express = require('express')
const multer = require('multer') 
const uploadfile = require('./service/storage')

const app = express()
app.use(express.json())
const upload = multer({storage: multer.memoryStorage()})
const postModel = require('./model/model')



app.get('/', (req, res) => {
    res.send('Hello, World!')

})



app.post('/create', upload.single('image'), async (req, res) => {
    
    const result = await uploadfile(req.file.buffer)
    const post =  await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    res.status(201).json({
        message: "Post created successfully",
        post
    })
    
})




app.get('/feed', async (req, res) => {
    const posts = await postModel.find()
    res.status(200).json({
        message: "post fetch successfully",
        posts
    })
})








module.exports = app