import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import users from './routes/users';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended:false}));

app.use('/api/users', users);

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to our first route!!!'
}));

app.use((req, res, next) => {
    const err = res.status(404).send({
        ERROR: '404 Page not found!'
    })
    next(err)
});

export default app;