const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.send('Hello All');
})

app.get('*', (req, res) => {
    res.send('<h1>404 Page Not Found</h1>')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

