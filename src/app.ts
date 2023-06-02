import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import deliveryRoutes from './routes/delivery.routes'
import jacketRoutes from './routes/jacket.routes'
import categoryRoutes from './routes/category.routes'


const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(userRoutes)
app.use(deliveryRoutes)
app.use(jacketRoutes)
app.use(categoryRoutes)

export default app;