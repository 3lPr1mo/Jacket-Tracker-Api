import { Router } from "express";
import { createCategoryJacket, deleteCategory, 
        getCategories, updateCategory} from '../controllers/categoryJacket.controllers';

const router = Router()

router.post('/category', createCategoryJacket)


router.get('/category', getCategories)


router.put('/category/:id', updateCategory)


router.put('/category/:id', deleteCategory)

export default router;