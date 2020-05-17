require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const { PORT } = process.env;
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, () => console.log(`server online in port ${PORT}`));
