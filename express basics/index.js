const express = require('express')
const app = express()

const port = 3000

app.set('view engine', 'ejs')

// express built in middleware - for allowing serving static resource files
app.use(express.static('public'))

// home route
app.get('/', (req, res) => {
//   console.log('inside home controller')
//   console.log(__dirname + '/welcome.html');
    // res.send('Hello World!')
    // res.sendFile(__dirname + '/welcome.html');
    // console.log("current route is? ");
    res.render('welcome',{user: "Cuvette student", condition:false, route: req.path})
})

app.get('/status', (req, res) => {
    res.json({status:"up and running!"})
})

app.get('/users', (req, res) => {
    console.log(req);
  console.log('inside users controllers')
//   res.send('Hello Users!')
 res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})