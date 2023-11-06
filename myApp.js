let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html'
const path = __dirname + '/public'
app.use('/public', express.static(path))
app.get('/',
    function (req, res) {
        res.sendFile(absolutePath)
    }
)
app.get('/json', function (req, res) {
    res.json({ "message": "Hello json" })
})


module.exports = app;