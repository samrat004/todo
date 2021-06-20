import { mongoDBConnection } from "./database/data";
import express from "express";
import { router } from "./routes/routes";


const app = express();
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
mongoDBConnection();
app.use("/", router);// app.get('/about', router);
app.listen(8080, () => {
    console.log("Server is Rocking at 8080");
});