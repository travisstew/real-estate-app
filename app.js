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

app.use('/', require('./routes/api'));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req,res)=>{
      res.sendFile(path.join(__dirname, 'client','build','index.html'))
    })
};

app.listen(PORT,function () { 
  console.log('listening on port ' + PORT);
 });

 app.use((req, res, next) => {
  // Error goes via `next()` method
  setImmediate(() => {
      next(new Error('Something went wrong'));
  });
});