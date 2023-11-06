let express = require('express');
let app = express();

const absolutePath = __dirname + '/views/index.html'
const path = __dirname + '/public'
app.use(express.static(path))
app.get('/',
    function (req, res) {
        res.sendFile(absolutePath)
    }
)



module.exports = app;