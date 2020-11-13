const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

if (process.env.NODE_ENV === 'development') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}

const router = require('./bootcamps.js');

app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log(`app running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode...`);
});


