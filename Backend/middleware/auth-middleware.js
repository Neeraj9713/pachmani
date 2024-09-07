import jwt from 'jsonwebtoken'
import user from "../models/SignUp.js";

const authMiddleware = async(req, res, next)=>{
    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json({message: "unauthorized HTTP, Token not provided"});
    }

    //assuming token is in the bearer form "Bearer" <jwtToken>, remove the "Bearer" prefix
    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token form auth middleware",jwtToken);

    try{
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        const userData = await user.findOne({email:isVerified.email}).select({password:0});
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    }catch(e){
        return res.status(401).json({message: "unauthorized, Invalid Token."});
    }
}

export default authMiddleware;