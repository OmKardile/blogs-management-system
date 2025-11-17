const express = require('express')
const cors = require('cors')

const userRouter = require('./routes/user')

const app = express()
//Middleware
app.use(express.json())
app.use(cors())
app.use('/user',userRouter)

app.listen(4000,'localhost',()=>{
    console.log('Server Started at port 4000');
    
})