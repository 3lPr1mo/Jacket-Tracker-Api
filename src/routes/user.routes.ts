import {Router} from 'express'
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/user.controllers';

const router = Router()

//CRUD

//Create
router.post('/users', createUser) //localhost:3000/user

//Read
router.get('/users', getUsers)

//Update
router.put('/users/:id', updateUser)

//Delete
router.delete('/users/:id', deleteUser)


export default router;