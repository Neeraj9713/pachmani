import express from "express"
import authcontroller from "../controller/auth-controller.js";
import validate from "../middleware/validate-middleware.js";
import {loginSchema , signupSchema} from "../validators/auth-validator.js";
import authMiddleware from "../middleware/auth-middleware.js";

const router = express.Router();


router.route("/").get(authcontroller.home)

router.route("/login").post(validate(loginSchema) , authcontroller.login)

router.route("/register").post(validate(signupSchema) , authcontroller.registration);

router.route("/user").get(authMiddleware, authcontroller.user);

export default router;


// one type
// router.route("/").get(async(req, res)=>{
//     try{
        
//     }catch(e){
//         res.send(e);
//     }
// })
