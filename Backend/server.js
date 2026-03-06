import express from 'express'
import PredictionRoute from './Routes/PredictionRoutes.js'
import { errorHandler } from './Middleware/ErrorMiddleware.js'
import cors from 'cors'

const app = express()

const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

app.use('/api', PredictionRoute)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})