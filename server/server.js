const express = require('express');
const cors = require('cors');

const questionsRoute = require('./routes/questionsRoute');

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log('Incoming request');
    next();
})

app.use('/quiz', questionsRoute)

app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});