var mongoose = require('mongoose');
mongoose.Promise = global.Promise
//Schema
const Schema   = mongoose.Schema;




const userSchema = new Schema({
    username: { type: String , required: true , lowercase: true , unique: true} ,
    email: { type: String , required: true , lowercase: true , unique: true } ,
    password: { type: String , required: true },
    role: { type: String , required: true   },
});


const productSchema = new Schema({
    productname: { type: String , required: true , lowercase: true , unique: true} ,
    description: { type: String , required: true , lowercase: true} ,
    category: { type: String , required: true },
	price: { type: String , required: true },
});



module.exports = mongoose.model('User' , userSchema);
module.exports = mongoose.model('Product' , productSchema);