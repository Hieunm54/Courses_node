import express from 'express';
import path from 'path';
import morgan from 'morgan';
import exphbs from 'express-handlebars';

// import route from './routes/index'
// const route = require('./routes/index')
import route from './routes/index.js';

// dirname in ES6
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();

//HTTP logger middleware
app.use(morgan('dev'));

//static assets
// src/resource/public/assets
app.use(express.static(path.join(__dirname, 'public')));

//handlebars middleware
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource/views'));

const port = 3000;

// route init
route(app);

app.listen(port, () => console.log(`listening on port ${port}`));
