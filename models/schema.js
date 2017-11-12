var mongoose = require('mongoose');
mongoose.Promise = global.Promise
//Schema
const Schema   = mongoose.Schema;

const customerSchema = new Schema({
    c_name: { type: String , required: true , lowercase: true , unique: true} ,
    c_email: { type: String , required: true , lowercase: true} ,
    c_password: { type: String , required: true },
    c_gender: { type: String , required: true },
    c_number: { type: Number , required: true },
    
});

const martSchema = new Schema({
    m_name: { type: String , required: true , lowercase: true , unique: true} ,
    m_number: { type: Number , required: true },
    
});


const surveySchema = new Schema({
    s_name: { type: String , required: true , lowercase: true , unique: true} ,
    s_email: { type: String , required: true , lowercase: true} ,
    s_password: { type: String , required: true },
    s_number: { type: Number , required: true },
    
});



const productSchema = new Schema({
    productname: { type: String , required: true , lowercase: true , unique: true} ,
    description: { type: String , required: true , lowercase: true} ,
    category: { type: String , required: true },
	price: { type: String , required: true },
});






module.exports = mongoose.model('Customer' , customerSchema);

module.exports = mongoose.model('Product' , productSchema);

module.exports = mongoose.model('Surveyor' , surveySchema);

module.exports = mongoose.model('Mart' , martSchema);
