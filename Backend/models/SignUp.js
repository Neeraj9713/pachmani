import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const signupSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    phone:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

signupSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    try{
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(this.password , saltRound);
        this.password = hash_password;
    }catch(e){
        next(e);
    }
})

signupSchema.methods.generateToken = async function(){
    try{
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                password: this.password
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1h",
            }
        )
    }catch(e){
        console.error(e);
    }
}

const signModel = new mongoose.model("LoginData",signupSchema);

export default signModel;

