import { Router } from "express";
import { createPet, getAllPet } from "../controllers/pet.controller.js";

const petRouter = Router();

petRouter.post('/pet', createPet);
petRouter.get('/pet', getAllPet);



export { petRouter }