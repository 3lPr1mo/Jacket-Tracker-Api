import { Request, Response } from "express-serve-static-core";
import { User } from "../entities/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { id, firstname, lastname } = req.body; //Extracting the first and lastname of the user

    const user = new User(); // Create an instance
    user.id = id;
    user.firstname = firstname;
    user.lastname = lastname;

    await user.save();
    console.log(user);

    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    //const {firstname, lastname} = req.body
    const { id } = req.params;
    const user = await User.findOneBy<any>({ id: parseInt(req.params.id) });

    if (!user) return res.status(404).json({ message: "User does not exist" });

    await User.update<any>({ id: parseInt(id) }, req.body); // el req.body hace un tipo de match en ese caso, asi que no es necesario mandar todos los parametros

    /*
    user.firstname = firstname;
    user.lastname = lastname;

    user.save();
    onsole.log(user) */

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await User.delete<any>({ id: parseInt(id) });
    if (result.affected === 0) {
      return res.status(404).json({ message: "User Not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
