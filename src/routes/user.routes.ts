import {Router} from 'express'
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/user.controllers';

const router = Router()

//Create
router.post('/users', createUser)

//Read
router.get('/users', getUsers)

//Update
router.put('/users/:id', updateUser)

//Delete
router.delete('/users/:id', deleteUser)


export default router;