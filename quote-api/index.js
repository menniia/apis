import express from "express";
import quotesRouter from "./quotesRoute.js";


const app = express();

app.use(express.json())

app.use(express.static("public"));

app.use("/api/quotes", quotesRouter)


const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})