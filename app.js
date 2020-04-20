const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cookieParser());

app.use(cors());

//body parser
app.use(express.urlencoded({extended:false}));
app.use(express.json());


require('dotenv').config();

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
};

app.listen(PORT,function () { 
  console.log('listening on port ' + PORT);
 });

