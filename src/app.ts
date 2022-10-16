import express from "express";
import cors from "cors";
import morgan from "morgan";
import { Request, Response } from "express";
import { myDataSource } from "./db";
import {  routerProducts} from "./routes/products.routes";

// initialize express
const app = express();

// handle middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/api/v1', (req: Request, res: Response) => {
      res.status(200).json({ message: 'ejecutando prueba api v1' });
});

app.use(routerProducts);

// funcion que arranca el servidor
async function main() {
      try {
            app.listen(5030);
            await myDataSource.initialize()
            .then(() => console.log('Conexion establecida con la base de datos'))
            console.log('server on running in port 5030');
      } catch (err) {
            console.log('error al hacer la conexion a la db');
      }
}

main();
