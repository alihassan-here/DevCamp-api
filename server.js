const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connecDB = require('./config/db');

//load env vriables
dotenv.config({ path: './config/config.env' });

//Connect to database
connecDB();


//Route Files
const bootcamp = require('./routes/bootcamp');

const app = express();

//Body Parser
app.use(express.json());

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Mount Routes
app.use('/api/v1/bootcamps', bootcamp);


const PORT = process.env.PORT || 5000;

const server = app.listen(process.env.PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    //close server & exit process
    server.close(() => process.exit(1));
});