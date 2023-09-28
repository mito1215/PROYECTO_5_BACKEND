import { Router } from "express";
import { simpleMiddlewareCar } from "../middleware/simpleMiddleware.js";
import { upload } from "../middleware/upload.js";
import { getCar, getCarId, postCar, updateCar, deleteCar } from "../controllers/car.controller.js";
export const carRouter = Router();

//ROUTES
//CRUD
//GET all users
//htpp://localhost:3002/rentcar/api/v1/users
carRouter.get("/", getCar);

//GET User by id
//htpp://localhost:3002/rentcar/api/v1/users/:id
carRouter.get("/:id", getCarId );

//POST htpp://localhost:3002/rentcar/api/v1/users
carRouter.post("/", simpleMiddlewareCar, postCar);

//UPDATE User
//Put or Patch htpp://localhost:3002/rentcar/api/v1/users/:id
//Put reemplaza todo el recurso y Patch actualiza el recurso
carRouter.patch("/:id", simpleMiddlewareCar, updateCar);

//DELETE User by id
//Delete htpp://localhost:3002/rentcar/api/v1/users/:id
carRouter.delete("/:id", deleteCar);