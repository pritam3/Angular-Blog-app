const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const mongoose= require('mongoose');
mongoose.Promise =global.Promise;
const path = require('path');
const authentication= require('./routes/authentication')(router);
const blog = require('./routes/blog')(router);
const bodyParser = require('body-parser');


//mongoose config
mongoose.connect("mongodb://localhost:27017/mean_blog_app",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true},
 (err)=>{
    if(err){
        console.log('Connection failed ',err);
    }else{
        console.log('Connected to the database');
    }
});


//middleware
app.use(cors({
    origin:'http://localhost:4200',//development server
    optionsSuccessStatus: 200
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname+ '/client/src/'));
app.use('/authentication', authentication);
app.use('/blog', blog);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+ '/client/src/index.html'));
});
  
app.listen(8080, ()=> {
    console.log("Server is running");
});