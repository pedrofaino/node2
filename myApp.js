let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html'

app.get('/',
    function (req, res) {
        res.sendFile(absolutePath)
    }
)

app.use('/public',express.static())

module.exports = app;