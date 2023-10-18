import cors from "cors";
import 'dotenv/config.js';
import express from "express";
import { dbConnection } from "./database/db.js";
import { errorHandler } from "./middleware/errorHanler.js";
import { logger } from "./middleware/logger.js";
import { unknownEndpoint } from "./middleware/unknowEndPoint.js";
import { carRouter } from "./routes/car.routes.js";
import { rentCarRouter } from "./routes/rentCar.routes.js";
import { stockCarRouter } from "./routes/stockCar.routes.js";
import { userRouter } from "./routes/user.routes.js";

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

/*Ruta Navegador para la tabla Stock Car */
server.use("/rentcar/api/v1/stock", stockCarRouter);

/*Ruta Navegador para la tabla Rent Car */
server.use("/rentcar/api/v1/rent", rentCarRouter);

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
