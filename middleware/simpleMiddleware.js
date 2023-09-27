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