import { Router } from "express";
import { createCategoryJacket, deleteCategory, 
        getCategories, updateCategory} from "../controllers/categoryJacket.controllers";

const router = Router()

router.post('categoryJacket', createCategoryJacket)


router.get('categoryJacket', getCategories)


router.put('categoryJacket/:id', updateCategory)


router.put('categoryJacket/:id', deleteCategory)

export default router;