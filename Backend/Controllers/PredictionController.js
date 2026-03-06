import asyncHandler from 'express-async-handler'

export const Predict = asyncHandler(async (req, res) => {
    const { area, bedrooms, bathrooms } = req.body

    if (!area || !bedrooms || !bathrooms) {
        res.status(404)
        throw new Error("All fields required")
    }

    const response = await fetch("http://127.0.0.1:3000/predict", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            area,
            bedrooms,
            bathrooms
        })
    })

    if (!response.ok) {
        res.status(500)
        throw new Error("Prediction Failed")
    }

    const data = await response.json()

    res.status(201).json(data)
})