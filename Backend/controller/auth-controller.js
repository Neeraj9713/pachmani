import signModel from "../models/SignUp.js";
import bcrypt from "bcryptjs";

const home = async (req, res) => {
  try {
    const data = await LoginModel.find();
    res.send(data);
  } catch (e) {
    console.log(e);
  }
};

const registration = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await signModel.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ message: "user is already present" });
    }

    const userCreated = await signModel.create({ username, email, phone, password });

      
    res
      .status(201)
      .json({
        msg: "registration Successful",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (e) {
    res.status(500).json("this is registration");
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isValid = await signModel.findOne({ email: email });
    if (!isValid) {
      return res.status(400).json({message: "Email & Password Wrong input"});
    }

    const valid = await bcrypt.compare(password , isValid.password);

    if(valid){
      res.status(200).json({
          msg: "Access login",
          token: await isValid.generateToken(),
          userId: isValid._id.toString(),
        });
    }
  } catch (e) {
    res.status(500).json("login unsuccessful");
  }
};

const user = async(req, res)=>{
  try{
    const userData = req.user;
    console.log("userdata", userData);
    return res.status(200).json({msg:userData})

  }catch(e){
    console.log(`error from the user route ${e}`);
  }
}

export default { home, registration, login, user };
