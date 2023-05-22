import {Router} from "express";
import { createJacket, getJackets, updateJacket, deleteJacket } from '../controllers/jacket.controllers'

const router = Router()

router.post('/jacket', createJacket)


router.get('/jacket', getJackets)


router.put('/jacket/:id', updateJacket)


router.delete('/jacket/:id', deleteJacket)


export default router;