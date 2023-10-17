import { RentCar } from "../models/rentCar.model.js";

//Obtener datos
export const getRentCar = async (request, response) => {
    console.log("Ingresando al controlador de Renta de Vehiculos ✔");
    const rentCars = await RentCar.find({});
    //Mostrar el status 200 y los usuarios
    response.status(200).json(rentCars);
}

//Obtener datos por id
export const getRentCarId = async (request, response, next) => {
    //Utilizamos un trycatch para manejar el error cuando no se ingresa bien un id
    try {
        const id = request.params.id;
        const rentCarFound = await RentCar.findById(id);

        if (!rentCarFound) {
            return response.status(404).end();
        }
        response.status(200).json(rentCarFound);
    } catch (error) {
        next(error);
    }
}

//Crear Vehiculo
export const postRentCar = async (request, response, next) => {
    try {
        //Definir variables de vehiculo
        const { customer, employee, carRegister, carPriceRent, startDate, FinishDate } = request.body;

        const userProps = {
            customer,
            employee,
            carRegister,
            carPriceRent,
            startDate,
            FinishDate
        };
        //Primera forma de crear documentos
        // const newUser = new User(userProps);
        // await newUser.save();
        //Segunda forma de crear documentos
        await RentCar.create(userProps);
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
export const updateRentCar = async(request, response, next) => {
    try {
        const id = request.params.id;
        const userNewProps = request.body;
        const updatedUser = await RentCar.findByIdAndUpdate(id, userNewProps, {new: true}).exec();
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
export const deleteRentCar = async(request, response, next) =>{
    try {
        const id = request.params.id;
        const deleteRentCar = await RentCar.findByIdAndRemove(id).exec();

        if(!deleteRentCar) {
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