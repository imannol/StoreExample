const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require ('express');
const morgan = require('morgan');


const app = express();

const usersRoutes = require('./routes/users.js');
const productsRoutes = require('./routes/productos.js');

// settings
app.set('port', process.env.PORT || 3000);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27018/tarea', {
    useNewUrlParser: true
}).then(db => console.log('DB conectada'))
.catch(err => console.log(err));
//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);


//start the server
app.listen(app.get('port'), ()=>{
    console.log('Server on port',app.get('port'));
});