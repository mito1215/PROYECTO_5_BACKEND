import { stockCar } from "../models/stockCar.model.js";

//Obtener datos
export const getStockCar = async (request, response) => {
    console.log("Ingresando al controlador de StockCar ✔");
    const stockCars = await stockCar.find({});
    //Mostrar el status 200 y los usuarios
    response.status(200).json(stockCars);
}

//Obtener datos por id
export const getStockCarId = async (request, response, next) => {
    //Utilizamos un trycatch para manejar el error cuando no se ingresa bien un id
    try {
        const id = request.params.id;
        const stockCarFound = await Car.findById(id);

        if (!stockCarFound) {
            return response.status(404).end();
        }
        response.status(200).json(stockCarFound);
    } catch (error) {
        next(error);
    }
}

//Crear Vehiculo
export const postStockCar = async (request, response, next) => {
    try {
        //Definir variables de vehiculo
        const { carBrand, carLine, carModel, carAmount, carPriceRent } = request.body;

        const userProps = {
            carBrand,
            carLine,
            carModel,
            carAmount,
            carPriceRent
        };
        //Primera forma de crear documentos
        // const newUser = new User(userProps);
        // await newUser.save();
        //Segunda forma de crear documentos
        await stockCar.create(userProps);
        //Responder con el estatus 201 y los datos del usuario
        //response.status(201).json(newUser);
        //Responder solo con el estatus 201
        response.status(201).json("User created successfully");
    }   catch (error) {
        // console.log(error.name);
        // console.log(error.message);
        // response.status(400).end();
        next(error);
    }
}

//Actualizar campos de registro
export const updateStockCar = async(request, response, next) => {
    try {
        const id = request.params.id;
        const userNewProps = request.body;
        const updatedUser = await Car.findByIdAndUpdate(id, userNewProps, {new: true}).exec();
        //response.status(200).json(updatedUser);
        response.status(200).end();
    } catch (error) {
        // console.log(error.name);
        // console.log(error.message);
        // response.status(400).end();
        next(error);
    }
}

//Eliminar registro
export const deleteStockCars = async(request, response, next) =>{
    try {
        const id = request.params.id;
        const deleteStockCar = await Car.findByIdAndRemove(id).exec();

        if(!deleteStockCar) {
            return response.status(404).end();
        }
        //Definir un 204 ignorara y no enviara ninguna respuesta la cliente si se pone .json o send.
        response.status(204).end();
    } catch (error) {
        // console.log(error.name);
        // console.log(error.message);
        // response.status(400).end();
        next(error);
    }
}