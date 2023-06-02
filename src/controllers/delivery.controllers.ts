import { Request, Response } from "express-serve-static-core";
import { Delivery } from "../entities/Delivery";

export const createDelivery = async (req: Request, res: Response) => {
  try {
    const { id, deliveryDate, user, jacket } = req.body;
    const delivery = new Delivery();
    delivery.id = id;
    delivery.deliveryDate = deliveryDate;
    delivery.user = user;
    delivery.jacket = jacket;

    await delivery.save();
    console.log(delivery);

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getDeliverieswithCategory = async (req: Request, res: Response) => {
  try {
    const deliveries = await Delivery.createQueryBuilder('delivery')
      .leftJoinAndSelect('delivery.jacket', 'jacket')
      .leftJoinAndSelect('jacket.jacketCategory', 'category')
      .select(['delivery', 'jacket', 'category'])
      .getMany();
  
    return res.json(deliveries);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }  
}; 

export const getDeliveries = async (req: Request, res: Response) => {
  try {
    const deliveries = await Delivery.find();
    return res.json(deliveries);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateDelivery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const delivery = await Delivery.findOneBy<any>({
      id: parseInt(req.params.id),
    });

    if (!delivery)
      return res.status(404).json({ message: "Delivery not found" });
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteDelivery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await Delivery.delete<any>({ id: parseInt(id) });
    if (result.affected === 0) {
      return res.status(404).json({ message: "Delivery not found" });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
