import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    _id:{
        type:Number,
        required:true  
    },
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String
    },
    Phone:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    GST:{
        type:String
    }
})

const ProductSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    HsnNo:{
        type:Number,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    quan:{
        type:Number,
        required:true
    },
    mrp:{
        type:Number,
        required:true
    },
    gst:{
        type:Number,
        required:true
    },
    rrp:{
        type:Number,
        required:true
    }
})

const InvoiceSchema = mongoose.Schema({
    user_id:{
        type:Number,
        required:true
    },
    pdt_id:{
        type:Array,
        required:true
    },
    quantity:{
        type:Array,
        required:true
    },
    total:{
        type:Array,
        required:true
    },
    billAmt:{
        type:Number,
        required:true
    }
})

export const UserModel = mongoose.model('User', UserSchema)
export const InvoiceModel = mongoose.model('Invoice', InvoiceSchema)
export const ProductModel = mongoose.model('Product', ProductSchema)