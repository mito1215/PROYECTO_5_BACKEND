import { Router } from "express";
import { simpleMiddlewareStockCar } from "../middleware/simpleMiddleware.js";
import { upload } from "../middleware/upload.js";
import { getStockCar, getStockCarId, postStockCar, updateStockCar,deleteStockCars } from "../controllers/stockCar.controller.js";
export const stockCarRouter = Router();

//ROUTES
//CRUD
//GET Stock Car
//htpp://localhost:3002/rentcar/api/v1/stockcar
stockCarRouter.get("/", getStockCar);

//GET Stock Car by id
//htpp://localhost:3002/rentcar/api/v1/stockcar/:id
stockCarRouter.get("/:id", getStockCarId );

//POST htpp://localhost:3002/rentcar/api/v1/stockcar
stockCarRouter.post("/", simpleMiddlewareStockCar, postStockCar);

//UPDATE User
//Put or Patch htpp://localhost:3002/rentcar/api/v1/stockcar/:id
//Put reemplaza todo el recurso y Patch actualiza el recurso
stockCarRouter.patch("/:id", simpleMiddlewareStockCar, updateStockCar);

//DELETE User by id
//Delete htpp://localhost:3002/rentcar/api/v1/stockcar/:id
stockCarRouter.delete("/:id", deleteStockCars);