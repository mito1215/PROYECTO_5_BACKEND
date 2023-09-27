import { request, response } from "express";
import Joi from "joi";

export const simpleMiddleware = (request, response, next) => {
    console.log("Ingresando al middleware ✔");
    /* Ejemplo de Auth muy basico
    if(request.headers.token == "Perrito1234")
        next()
    else
        response.status(500).send("error")
    */
    //Definir variables de usuario
    const { DNI, firstName, lastName, birthdate, role, cellPhoone, email, password, userName } = request.body;

    //Definir reglas
    const schema = Joi.object({
        DNI: Joi.string().min().max().required(),
        firstName: Joi.string().min().max().required(),
        lastName: Joi.string().min().max().required(),
        birthdate: Joi.date().min().max().required(),
        role: Joi.string().min().max().required(),
        cellPhoone: Joi.string().min(7).max().required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/)),
        userName: Joi.string().min().max().required(),
    });
    //Validar reglas
    const valueRules = schema.validate({
        DNI: DNI,
        firstName: firstName,
        lastName: lastName,
        birthdate: birthdate,
        role: role,
        cellPhoone: cellPhoone,
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