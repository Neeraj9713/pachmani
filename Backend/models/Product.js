import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const productSchema = new mongoose.Schema({
    dataType:{
        type : String,
        required : true
    },
    name:{
        type: String,
        required: true,
    },
    detail:{
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true 
    }
})

productSchema.pre("save", async function(next){
    try{
        if(this.isModified("dataType")){
            this.dataType = await bcrypt.hash(this.dataType , 10);
            console.log(this.dataType);
        }
        next();
    }catch(e){
        console.log(e);
    }
})

const productModel = new mongoose.model("Product",productSchema);

export default productModel;