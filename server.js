var express = require('express'),
    app = express();

app.use(express.static(__dirname + ''));

app.listen(8080)
console.log('Server running at http://127.0.0.1:8080');
