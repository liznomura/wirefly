const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.post('/process', (req, res) => {
  console.log(req.body);

  res.send('works')

})

app.listen(8080, () => console.log('listening on 8080'))