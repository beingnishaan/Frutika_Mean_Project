const mongoose=require('mongoose');
const schema=mongoose.schema
const product=new schema({
    pname:{
        type: String,
        required:true
    },
    desc:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:false
    },
    price:{
        type: String,
        required:true
    },
    timestamps: true
})

const ProductModel = mongoose.model('product', product)
module.exports = ProductModel;