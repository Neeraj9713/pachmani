import express from "express";
const router = express.Router();
import contactForm from "../controller/contact-controller.js";

router.route("/contact").post(contactForm);

export default router;