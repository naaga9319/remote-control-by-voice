// var fs = require("fs");
// var https = require('https');
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


// var privateKey = fs.readFileSync('privatekey.pem').toString();
// var certificate = fs.readFileSync('certificate.pem').toString();

app.get('', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// var httpOptions = {key: privateKey, cert: certificate};
// app.listen(8000, () => {
//     console.log(">> Serving on " + 8000);
// });
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/public/index.html');
// });
app.listen(port, () => console.info(`Listening on port ${port}`))