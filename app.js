const express         = require('express')
const bodyParser      = require('body-parser')
const {userRouter}    = require('./routers/userRouter')
const path = require('path')
// const {taskRouter}    = require('./routers/taskRouter')
// const {projectRouter} = require('./routers/projectRouter')

// Create EventEmitter with util.inherits
// const util = require('util')
// function MyEmitter(m) {
// }
// util.inherits(MyEmitter, EventEmitter)

// create our Express app
const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
  
app.get('/home', function(req, res){
  
    // Rendering our web page i.e. Demo.ejs
    // and passing title variable through it
    res.render('index', {
        title: 'View Engine Demo'
    })
})

// bodyParser allows us to read the payload and set it to json so we can work with it
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/users', userRouter)

app.get('*', userRouter)

/* Event Listeners: */
// userEvents.on('usersFound', users => {
//     console.log('event users -> ', users)
// })
// taskEvents.on('tasksFound', tasks => {
//     console.log('event tasks -> ', tasks)
// })

app.listen(3000, () => {
    console.log('Express API listening on port 3000!')
})
