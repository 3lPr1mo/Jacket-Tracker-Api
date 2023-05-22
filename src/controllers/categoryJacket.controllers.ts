import { Request, Response } from "express-serve-static-core";
import { CategoryJacket } from "../entities/CategoryJacket";

export const createCategoryJacket = async (req: Request, res: Response) => {
    try{
        const{id, type, jackets} = req.body;

        const category = new CategoryJacket();
        category.id = id;
        category.type = type;
        category.jackets = jackets;

        await category.save();
        console.log(category);

        return res.json(category);
    }catch(error){
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
export const getCategories = async (req: Request, res: Response) => {
    try{
        const categories = await CategoryJacket.find();
        return res.json(categories);
    }catch(error){
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
export const updateCategory = async (req: Request, res: Response) => {
    try{
        const { id } = req.params
        const category = await CategoryJacket.findOneBy<any>({id: parseInt(id)});

        if(!category) return res.status(404).json({message: "Category not foud"})

        await CategoryJacket.update<any>({id: parseInt(id)}, req.body);
        return res.sendStatus(204);
    }catch(error){
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
export const deleteCategory = async (req: Request, res: Response) => {
    try{
        const {id} = req.params
        const result = await CategoryJacket.delete<any>({id: parseInt(id)});
        if(result.affected === 0){
            return res.status(404).json({message: "Category not found"});
        }

        return res.sendStatus(204);
    }catch(error){
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};