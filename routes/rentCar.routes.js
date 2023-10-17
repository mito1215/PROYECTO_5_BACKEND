import { Router } from "express";
import { deleteRentCar, getRentCar, getRentCarId, postRentCar, updateRentCar } from "../controllers/rentCar.controller.js";
import { simpleMiddlewareRentCar } from "../middleware/simpleMiddleware.js";

export const rentCarRouter = Router();

//ROUTES
//CRUD
//GET all users
//htpp://localhost:3002/rentcar/api/v1/users
rentCarRouter.get("/", getRentCar);

//GET User by id
//htpp://localhost:3002/rentcar/api/v1/users/:id
rentCarRouter.get("/:id", getRentCarId );

//POST htpp://localhost:3002/rentcar/api/v1/users
rentCarRouter.post("/", simpleMiddlewareRentCar, postRentCar);

//UPDATE User
//Put or Patch htpp://localhost:3002/rentcar/api/v1/users/:id
//Put reemplaza todo el recurso y Patch actualiza el recurso
rentCarRouter.patch("/:id", simpleMiddlewareRentCar, updateRentCar);

//DELETE User by id
//Delete htpp://localhost:3002/rentcar/api/v1/users/:id
rentCarRouter.delete("/:id", deleteRentCar);