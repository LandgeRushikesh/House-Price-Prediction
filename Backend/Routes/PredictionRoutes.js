import express from 'express'
import { Predict } from '../Controllers/PredictionController.js'

const Router = express.Router()

Router.post('/predict', Predict)

export default Router