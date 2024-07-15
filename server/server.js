import express from "express";
import cors from "cors";

import { cwd } from "node:process";
import path from "node:path";
import dotenv from "dotenv"

import { routerApi } from "../routes/routes.js";
import { boomErrorHandler, errHandler } from "../middlewares/error.handler.js"

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()
app.disable("x-powered-by")
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(cwd(), './views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(cwd(), './views/index.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(cwd(), './views/home.html'));
})

app.listen(PORT, () => {
    console.log(`Server Runnig in ${PORT} port`)
})

routerApi(app)

app.use(boomErrorHandler)
app.use(errHandler)
