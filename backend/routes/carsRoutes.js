const express = require("express");
const router = express.Router();
const Car = require("../models/carModel")


router.get("/api/cars/getallcars", async (req, res) => {
    try {
        const cars = await Car.find()
        res.send(cars)
    } catch (error) {
        return res.status(400).json(error);
    }
});

router.post("/api/cars/addcar", async (req, res) => {
    try {
        const newcar = new Car(req.body)
        await newcar.save()
        res.send('CAR Added successfully')
    } catch (error) {
        return res.status(400).json(error);
    }
});


router.post("/api/cars/editcar", async (req, res) => {
    try {
        const car = await Car.findOne({ _id: req.body._id })
        car.title = req.body.title
        car.image = req.body.image
        car.description = req.body.description
        car.tags = req.body.tags


        await car.save()
        res.send('CAR updated successfully')

    } catch (error) {
        return res.status(400).json(error);
    }
});

router.post("/api/cars/deletecar", async (req, res) => {
    try {
        const car = await Car.findOneAndDelete({ _id: req.body.carid })

        res.send('CAR deleted successfully')

    } catch (error) {
        return res.status(400).json(error);
    }
});


module.exports = router;  