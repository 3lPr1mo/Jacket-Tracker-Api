import { Router } from "express";
import { createDelivery, deleteDelivery, getDeliveries, updateDelivery } from "../controllers/delivery.controllers";

const router = Router()

//CRUD

//Create
router.post('/delivery', createDelivery)

//Read
router.get('/delivery', getDeliveries)


//Update
router.put('/delivery/:id', updateDelivery)


//Delete
router.delete('/delivery/:id', deleteDelivery)
