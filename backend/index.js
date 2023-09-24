
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());


const db = require('./db.config');
db.sequelize.sync()
    .then(() => {
        console.log('ok report');
    }).catch(() => {
        console.log("error");
    })


// console.log(__dirname);
const controller = require(path.join(__dirname + '/controller'));

// app.get('/companies', (req, res) => {
//     res.send("company added");
// })

app.post('/companies', (req, res) => {
    controller.addCompany(req, res);
})

// app.get('/companies', (req, res) => {
//     controller.gettingData(req, res);
// })

app.post('/companies/new', (req, res) => {
    controller.ratingData(req, res);
})

app.get('/companies/new', (req, res) => {
    controller.showOnScreen(req, res);
})



app.listen(4000);
