const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('./routes')

const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use('/contacts',router)

app.get('/', (req, res) => {
    res.json('Hi i am Home')
})

const PORT = process.env.PORT || 8080
mongoose.connect('mongodb+srv://ShohelRana:PMER7gmDsbBdULi4@cluster0.82mknop.mongodb.net/test', {
    useNewUrlParser: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
        })
 })
    .catch(e => {
     console.log(e);
 })


