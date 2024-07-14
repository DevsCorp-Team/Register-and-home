import express from "express";
import cors from "cors";

import { cwd } from "node:process";
import path from "node:path";

import { routerApi } from "../routes/routes.js";

const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(cwd(), './views')));

app.get('/', (req, res) => {
    res.sendFile(path.join(cwd(), './views/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server Runnig in ${PORT} port`)
})

routerApi(app)
