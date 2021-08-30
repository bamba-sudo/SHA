const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));


//app.get('/', function (req, res) {

  //});
