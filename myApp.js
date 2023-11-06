let express = require('express');
let app = express();


app.get('/',
    function (req, res) {
        res.sendFile('/views/index.html')
    }
)
module.exports = app;