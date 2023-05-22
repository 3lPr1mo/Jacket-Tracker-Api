import { Request,Response } from "express-serve-static-core";
import { Jacket } from "../entities/Jacket";
import { Delivery } from "../entities/Delivery";


export const createJacket = async (req: Request, res: Response) =>{
    
    try{

        const {id, name, description, size, price, quantityDeliveried, 
        deliveryDate, deliveries, jacketCategory} = req.body
        const jacket = new Jacket();
        jacket.id = id;
        jacket.name = name;
        jacket.description = description;
        jacket.size = size;
        jacket.price = price;
        jacket.quantityDeliveried = quantityDeliveried;
        jacket.deliveryDate = deliveryDate;
        jacket.deliveries = deliveries; // aqui no estoy seguro xDD
        jacket.jacketCategory = jacketCategory;
        
        await jacket.save();
        console.log (jacket);
        return res.json (jacketCategory);

    }catch(error){
        if (error instanceof Error){
            return res.status(500).json({ message: error.message})
        }
    }

};
export const getJackets = async (req: Request, res: Response) => {
    try{

        const jackets = await Jacket.find();
        return res.json(jackets);

    }catch (error){
        if(error instanceof Error){
            return res.status(500).json({mesagge: error.message})
        }
    }
};
export const updateJacket = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const jacket = await Delivery.findOneBy<any>({
            id: parseInt(req.params.id),
        })
        if(!jacket)
            return res.sendStatus(404).json({message: "Jacket not found"});
        return res.sendStatus(204);
    }catch (error){
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
};
export const deleteJacket =async (req : Request, res: Response) => {
    try{
        const{id} = req.params;
        const result = await Jacket.delete<any>({id: parseInt(id)});
        if (result.affected === 0){
            return res.status(404).json({ message: "Jacket not found"});
        }
    }catch(error){
        if(error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}