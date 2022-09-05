import appRouter from "./route/appRoutes";
import express, {application} from "express";

export default class App {
    private app: application;
    constructor() {
        this.app = express();
        this.app.set('port', 3333);
        this.app.use(appRouter)
    }

    async listen() {
        this.app.listen(3333);
        console.log("Server started at localhost:3333");
    }
}