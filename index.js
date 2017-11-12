//Core module
const  express    = require('express');
const  bodyParser = require('body-parser')
const  app        =  express();
const  mongoose   = require('mongoose');
const  router     = express.Router();

const  config     = require('./config/database');
const  path       = require('path') ;
const  schema  = require('./models/schema')(router);


//database connection
mongoose.Promise = global.Promise;
mongoose.connect( config.uri , (err)=>{
    if (err){
        console.log('Could not connected to the database');
    }else {

        console.log('connected to database : '+config.db);
    }
});
//serverlisting
var port =  process.env.PORT || 1212;
app.listen( port , () => {
    console.log('Server Stared at port  : ' +port);
});
