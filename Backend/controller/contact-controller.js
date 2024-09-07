import ContactModel from '../models/ContactForm.js';

const contactForm = async(req, res)=>{
    try{
        const response = req.body;
        await ContactModel.create(response);
        res.status(200).json({message: "contact form created"})
    }
    catch(e){
        res.status(500).json({message: "contact form not created"})
    }
}
export default contactForm;
