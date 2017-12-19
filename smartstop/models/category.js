
const mongoose =  require('mongoose');
mongoose.Promise = global.Promise;

const  Schema = mongoose.Schema;

const  categorySchema = new Schema({
    name:{type:String , require:true  },
    price:{type:String , require:true  },
    code:{type:String , require:true  },
    categ:{type:String , require:true  },
    mart:{type:String , require:true  },
    description:{type:String , require:true  },
    //  products : [{ type: Schema.Types.ObjectId, ref: 'Product' }]

});

module.exports = mongoose.model('Category' , categorySchema);
