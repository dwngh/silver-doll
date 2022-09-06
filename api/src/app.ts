import appRouter from "./route/appRoutes";
import express, {application} from "express";
import cors from 'cors';
import helmet from 'helmet'

export default class App {
    private app;
    constructor() {
        this.app = express();
        this.app.set('port', 3333);

        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(express.json());

        this.app.use(appRouter);
        console.log(this.app)
    }

    async listen() {
        this.app.listen(3333);
        console.log("Server started at localhost:3333");
    }
}