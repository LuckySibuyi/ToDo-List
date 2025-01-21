require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json);

//static files
app.use(express.static('public'));

//tamplate engine
app.use(expressLayout);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');

//home
app.get('/', (req, res) => {
res.send('Hey there');
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });