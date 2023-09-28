import express from "express";
import cors from "cors";
import 'dotenv/config.js'

import { dbConnection } from "./dataBase/db.js";
import { unknownEndpoint } from "./middleware/unknowEndPoint.js"
import { userRouter } from "./routes/user.routes.js";
import { carRouter } from "./routes/car.routes.js";
import { errorHandler } from "./middleware/errorHanler.js" 
import { logger } from "./middleware/logger.js";

const server = express();
const PORT = process.env.PORT;

/*Transformar el cuerpo en peticion en un js */
server.use(express.json());

/*Permitir recibir solicitudes de clientes fuera de mi dominio */
server.use(cors());

//Middleware: Monstrar parametros del registro
server.use(logger);

/*Ruta Navegador para la tabla Usuario */
server.use("/rentcar/api/v1/users", userRouter);

/*Ruta Navegador para la tabla Vehiculo */
server.use("/rentcar/api/v1/cars", carRouter);

//Ruta basica para probar que esta levantada la api
server.use(
    "/rentcar/api/v1/welcome",
    (req, res) => res.status(200).json({message: 'Welcome to my api rest'}))

//Middleware: Cuando no se encuentra la ruta
server.use(unknownEndpoint);

//Errores de Usuario
server.use(errorHandler);

async function main() {
    await dbConnection();
    //Conectar servidor
    server.listen(PORT, () => {
        console.log(`Server run in http://localhost:${PORT}`);
    });
}

main();
