const express = require('express');
const app = express();
var PORT = 5000;
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys')
const cors = require('cors')

app.use(cors());

mongoose.connect(MONGOURI,{
     useNewUrlParser:true,useUnifiedTopology:true
})
mongoose.connection.on('connected' , () => {
     console.log('Connected to database')
})
mongoose.connection.on('error' , (err) => {
     console.log('Error while connecting to database', err)
})

require('./models/user');
require('./models/product');
require('./models/cart');

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/cart'));
app.use(require('./routes/product'));

app.listen(PORT,() => {
     console.log('Server is running on Port' , PORT);
})

//

