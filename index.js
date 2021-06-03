import express from 'express';

const app = express();

const port = 3000;

// route
app.get('/',(req,res) => res.send('Hello World'));


app.listen(port,() =>console.log(`listening on port ${port}`));