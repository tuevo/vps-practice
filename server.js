const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cv', (req, res) => {
  res.render('cv');
})

app.listen(port, err => {
  if (err)
    console.error(err);
  else console.log('Server is listening on port ' + port);
});