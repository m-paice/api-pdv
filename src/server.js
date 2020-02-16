require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routes = require('./routes');

const { PORT } = process.env;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

routes.forEach((route) => app.use(route));

app.listen(PORT, () => console.log(`server online in port ${PORT}`));
