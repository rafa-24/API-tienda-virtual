import { Router } from "express";
import { getAll } from "../controllers/products.controller";


export const routerProducts = Router();

routerProducts.get('/api/v1/eccomerce/products', getAll);


