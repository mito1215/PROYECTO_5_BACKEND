import { Car } from "../models/car.model.js";

//Obtener datos
export const getCar = async (request, response) => {
    console.log("Ingresando al controlador de Vehiculos ✔");
    const cars = await Car.find({});
    //Mostrar el status 200 y los usuarios
    response.status(200).json(cars);
}

//Obtener datos por id
export const getCarId = async (request, response, next) => {
    //Utilizamos un trycatch para manejar el error cuando no se ingresa bien un id
    try {
        const id = request.params.id;
        const carFound = await Car.findById(id);

        if (!carFound) {
            return response.status(404).end();
        }
        response.status(200).json(carFound);
    } catch (error) {
        next(error);
    }
}

//Crear Vehiculo
export const postCar = async (request, response, next) => {
    try {
        //Definir variables de usuario
        const { carRegister, carBrand, carLine, carModel, carColor, carFuel } = request.body;

        const userProps = {
            carRegister,
            carBrand,
            carLine,
            carModel,
            carColor,
            carFuel
        };
        //Primera forma de crear documentos
        // const newUser = new User(userProps);
        // await newUser.save();
        //Segunda forma de crear documentos
        await Car.create(userProps);
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

//Actualizar campos de usuario
export const updateCar = async(request, response, next) => {
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

//Eliminar usuario
export const deleteCar = async(request, response, next) =>{
    try {
        const id = request.params.id;
        const deleteCar = await Car.findByIdAndRemove(id).exec();

        if(!deleteCar) {
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