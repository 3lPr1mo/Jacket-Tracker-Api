import {DataSource} from 'typeorm'
import { User } from './entities/User'
import { Jacket } from './entities/Jacket'
import { Delivery } from './entities/Delivery'
import { CategoryJacket } from './entities/CategoryJacket'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'jacket-tracker',
    logging: true,
    synchronize: true,
    entities: [User, Jacket, Delivery, CategoryJacket],
    subscribers: [],
    migrations: [],
})