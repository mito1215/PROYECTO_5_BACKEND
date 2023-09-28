import mongoose from "mongoose";

//Crear SCHEMA o esquema de la tabla Car
const carSchema = new mongoose.Schema({
    carRegister: {type: String, require: true},
    carBrand: {type: String, require: true},
    carLine: {type: String, require: true},
    carModel: {type: Number, require: true},
    carColor: {type: String, require: true},
    carFuel: {type: String, require: true},
});

export const Car = mongoose.model(
    "Car", 
    carSchema
);