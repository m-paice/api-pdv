require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const bodyParser = require('body-parser');

const routes = require('./routes');

const { PORT } = process.env;
const app = express();

app.use('/files', express.static('upload', { maxAge: '120 days' }));
app.use(morgan('dev'));
app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.json());

routes.forEach((route) => app.use(route));

app.listen(PORT, () => console.log(`server online in port ${PORT}`));
