let express = require('express');
let app = express();


app.get('/',
    function (req, res) {
        res.sendFile('C:\Users\pedro\OneDrive\Escritorio\node cerification freecode\boilerplate-express\views\index.html')
    }
)
module.exports = app;