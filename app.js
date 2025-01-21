require('.env').config();

const express = require('express');
const expressEjsLayouts = require('express-ejs-layouts');
const expressLayout = require(expressEjsLayouts);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(expressLayout.urlencoded({ extended: true }));
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

app.listen(port, () =>{
    console.log('App listeningon port ${port}')
});