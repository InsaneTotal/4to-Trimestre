import { Router } from "express";

import userQueries from "../controllers/listPersonas.js";

const router = Router();

router.get("/list", userQueries.listUsers);
router.get("/list/:id", userQueries.getUserByID);
router.post("/register", userQueries.addUsers);
router.delete("/list/:id", userQueries.deleteUser);
router.put("/list/:id", userQueries.updateUser);

export default router;
