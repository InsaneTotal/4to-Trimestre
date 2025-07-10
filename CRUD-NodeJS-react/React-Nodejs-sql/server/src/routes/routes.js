import express from "express";
import formulario from "../controllers/saludo.js";
// import Form from "../../../client/src/components/form.jsx"; // Adjust the import path as necessary

const router = express.Router();

router.get("/formulario", formulario());

export default router;
