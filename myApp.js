let express = require('express');
require('dotenv').config()
let app = express();

const absolutePath = __dirname + '/views/index.html'
const path = __dirname + '/public'
app.use(function(req,res,next){
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})
app.use('/public', express.static(path))
app.get('/',
    function (req, res) {
        res.sendFile(absolutePath)
    }
)
app.get('/json', function (req, res) {
    const message = "Hello json"
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({ "message": message.toUpperCase() })
    }else{
        res.json({ "message": message })
    }
})


module.exports = app;