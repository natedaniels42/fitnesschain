const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const mainController = require('./controllers/mainController')

app.set('view engine', 'ejs');

// MIDDLEWARE 
app.use(express.static(`${__dirname}/public`));

app.use(express.urlencoded({extended:false}));


// ROUTES
app.get('/', (req, res) => {
    res.send('Hello All');
})

app.use('/', mainController);


app.get('*', (req, res) => {
    res.send('<h1>404 Page Not Found</h1>');
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

