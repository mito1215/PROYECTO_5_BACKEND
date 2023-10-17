import mongoose from "mongoose";

//Crear SCHEMA o esquema de la tabla RentCar
const rentCarSchema = new mongoose.Schema({
    customer: {type: String, require: true},
    employee: {type: String, require: true},
    carRegister: {type: Number, require: true},
    carPriceRent: {type: Number, require: true},
    startDate: {type: Date, require: true},
    FinishDate: {type: Date, require: true},
});

export const RentCar = mongoose.model(
    "RentCar", 
    rentCarSchema
);