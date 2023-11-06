let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html'

app.get('/',
    function (req, res) {
        res.sendFile(absolutePath)
    }
)

const path = __dirname + '/public/style.css'

app.use('/public',express.static(path))

module.exports = app;