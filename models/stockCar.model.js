import mongoose from "mongoose";

//Crear SCHEMA o esquema de la tabla StockCar
const stockCarSchema = new mongoose.Schema({
    carBrand: {type: String, require: true},
    carLine: {type: String, require: true},
    carModel: {type: Number, require: true},
    carAmount: {type: Number, require: true},
    carPriceRent: {type: Number, require: true},
});

export const stockCar = mongoose.model(
    "stockCar", 
    stockCarSchema
);