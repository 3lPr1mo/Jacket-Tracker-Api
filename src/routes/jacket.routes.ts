import {Router} from "express";
import { createJacket, getJackets, updateJacket, deleteJacket, getJacketsWithContext, cosolidateJackets } from '../controllers/jacket.controllers'

const router = Router()

router.post('/jacket', createJacket)


router.get('/jacket', getJackets)


router.get('/jackets', getJacketsWithContext)

router.get('/consolidate', cosolidateJackets )

router.put('/jacket/:id', updateJacket)


router.delete('/jacket/:id', deleteJacket)


export default router;