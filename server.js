const express = require('express');

const config = require('./src/helpers/config');
const logger = require('./src/helpers/logger');

const index_route = require('./src/routes/index.route');
const auth_route = require('./src/routes/auth.route');

const db = require('./src/db/db');

const ENV = process.env.NODE_ENV || 'prod';
const PORT = process.env.PORT || '3001';

const app = express();

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
  
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        message: 'Error',
        error: err
    });
});

logger.info(config[ENV]);

app.use('/auth', auth_route);
app.use('/', index_route);

app.listen(PORT, function(err) {
    if(err) {
        logger.error(err)
    }

    console.log(`Server started on port : ${PORT}`);
});