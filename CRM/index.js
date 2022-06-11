import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;

//mongoose connection //mongo and API
mongoose.Promise = global.Promise;
mongoose.connect('mongoose://localhost/CRMdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extened: true }));
app.use(bodyParser.json());

//parsing the req object that is readable by API

routes(app);
app.get('/',(req,res) =>
    res.send(`Node and express server ruuning on the port ${port}`));

app.listen(port, ()=>
console.log(`your server is running on port ${port}`)
);