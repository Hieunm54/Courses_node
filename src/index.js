import express from 'express';
import path from 'path';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();

//HTTP logger middleware
app.use(morgan('dev'));

//handlebars middleware
app.engine('.hbs',exphbs({extname: '.hbs'}));
app.set('view engine','.hbs');
app.set('views', path.join(__dirname, 'resource/views'));
console.log(__dirname);

const port = 3000;

// route
app.get('/',(req,res) => res.render('home'));


app.listen(port,() =>console.log(`listening on port ${port}`));
