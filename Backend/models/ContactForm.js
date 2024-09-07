import {Schema,model} from "mongoose";

const ContactSchema = new Schema({
    name: String,
    email:String,
    paragraph: String
})

const ContactModel = new model("Contact", ContactSchema);

export default ContactModel;