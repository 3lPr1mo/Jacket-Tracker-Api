import { Router } from "express";
import {createJacket, getJackets, updateJacket, deleteJacket} from '../controllers/jacket.controllers'

const router = Router()


router.post('/jackets', createJacket)


router.get('/jackets', getJackets)


router.put('/jackets/:id', updateJacket)


router.delete('/jackets/id', deleteJacket)


export default router;