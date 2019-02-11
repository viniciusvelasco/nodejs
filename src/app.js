const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
mongoose.connect('mongodb://vinicius:vinicius@node-store-shard-00-00-nrnkp.azure.mongodb.net:27017,node-store-shard-00-01-nrnkp.azure.mongodb.net:27017,node-store-shard-00-02-nrnkp.azure.mongodb.net:27017/test?ssl=true&replicaSet=node-store-shard-0&authSource=admin&retryWrites=true');

const index = require('./routes/index');
const product = require('./routes/product');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/', index);
app.use('/products', product);

module.exports = app;