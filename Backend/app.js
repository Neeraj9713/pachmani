import "dotenv/config";
import express from "express";
const app = express();
import authRoute from "./router/router.js";
import ContactRoute from "./router/Contact-router.js"
import "./db/conn.js";
import connectdb from './db/conn.js';  
import errorMiddleware from "./middleware/error-middleware.js";
import cors from "cors";

const port = process.env.PORT || 3000;

// var corsOptions = {
//     origin: 'http://localhost:5173/',
//     methods: "GET , POST, PATCH, PUT, HEAD, DELETE",
//     Credentials: true    
// }

app.use(cors());

app.use(express.json());  // express ka middleware he jo incoming request ko json me parse kr deta he

app.use("/api/auth", authRoute);
app.use("/api/form", ContactRoute);



//error middleware use
app.use(errorMiddleware)


// app.get("/",(req,res)=>{
//     res.send("Data");
// })

// app.get("/login", async(req, res)=>{
//     try{
//         const data = await LoginModel.find();
//         res.send(data);
//     }catch(e){
//         res.render(e);
//     }
// })

// app.post("/login", async(req, res)=>{
//     try{
//         const postdata = new LoginModel({
//             name: req.body.name,
//             email: req.body.email,
//             password: req.body.password
//         })
//         const result = await postdata.save();
//         res.send(result);
//         console.log(result);
//     }catch(e){
//         res.send(e);
//     }
// })


connectdb().then(()=>{
    app.listen(port,()=>{
        console.log(`listen port no.. ${port}`);
    })
})
