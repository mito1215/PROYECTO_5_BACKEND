//ejemplo de midleware
import { request, response } from "express";
import Joi from "joi";

export const simpleMiddleware = (request, response, next) => {
    console.log("Ingresando al middleware ✔");

    //Definir variables de usuario
    const {DNI, firstName, lastName, birthdate, role, cellPhone, email, password, userName} = request.body;

    //Definir reglas
    const schema = Joi.object({
        DNI: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        birthdate: Joi.date().required(),
        role: Joi.string().required(),
        cellPhone: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/)),
        userName: Joi.string().required(),
    });
    //Validar reglas
    const valueRules = schema.validate({
        DNI: DNI,
        firstName: firstName,
        lastName: lastName,
        birthdate: birthdate,
        role: role,
        cellPhone: cellPhone,
        email: email,
        password: password,
        userName: userName
    });

    if (valueRules.error) {
        response.status(500).json(valueRules.error)
    } else {
        next();
    }
}

//Validacion tabla Vehiculos
export const simpleMiddlewareCar = (request, response, next) => {
    console.log("Ingresando al middleware ✔");

    //Definir variables de usuario
    const {carRegister, carBrand, carLine, carModel, carColor, carFuel} = request.body;

    //Definir reglas
    const schema = Joi.object({
        carRegister: Joi.string().required(),
        carBrand: Joi.string().required(),
        carLine: Joi.string().required(),
        carModel: Joi.number().required(),
        carColor: Joi.string().required(),
        carFuel: Joi.string().required(),
    });
    //Validar reglas
    const valueRules = schema.validate({
        carRegister: carRegister,
        carBrand: carBrand,
        carLine: carLine,
        carModel: carModel,
        carColor: carColor,
        carFuel: carFuel
    });

    if (valueRules.error) {
        response.status(500).json(valueRules.error)
    } else {
        next();
    }
}

//Validacion tabla StockCar
export const simpleMiddlewareStockCar = (request, response, next) => {
    console.log("Ingresando al middleware Stock Car ✔");

    //Definir variables de stock car
    const {carBrand, carLine, carModel, carAmount, carPriceRent} = request.body;

    //Definir reglas
    const schema = Joi.object({
        carBrand: Joi.string().required(),
        carLine: Joi.string().required(),
        carModel: Joi.number().required(),
        carAmount: Joi.number().required(),
        carPriceRent: Joi.number().required(),
    });
    //Validar reglas
    const valueRules = schema.validate({
        carBrand: carBrand,
        carLine: carLine,
        carModel: carModel,
        carAmount: carAmount,
        carPriceRent: carPriceRent
    });

    if (valueRules.error) {
        response.status(500).json(valueRules.error)
    } else {
        next();
    }
}