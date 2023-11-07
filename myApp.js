let express = require('express');
let bodyParser = require('body-parser');
require('dotenv').config()
let app = express();

const absolutePath = __dirname + '/views/index.html'
const path = __dirname + '/public'

app.use(bodyParser.urlencoded({extended:false}));

app.use(function (req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})

app.use('/public', express.static(path))

app.get('/',
    function (req, res) {
        res.sendFile(absolutePath)
    }
)

app.get('/now', function (req, res, next) {
    req.time = new Date().toString();
    next();
},
    function (req, res) {
        res.json({ 'time': req.time });
    }
)

app.get('/json', function (req, res) {
    const message = "Hello json"
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({ "message": message.toUpperCase() })
    } else {
        res.json({ "message": message })
    }
})

app.get('/:word/echo', function (req, res) {
    const word = req.params.word
    res.json({ 'echo': word })
})

app.get('/name', function(req,res){
    const firstname = req.query.first
    const lastname = req.query.last
    res.json({'name': `${firstname} ${lastname}`})
})

app.post('/name', function(req, res){
    const name = req.body.first
    const last = req.body.last
    res.json({'name':`${name} ${last}`})
})

module.exports = app;