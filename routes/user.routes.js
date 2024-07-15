import { Router } from "express";
import { User } from "../services/user.service.js";
import { validatorHandler } from "../middlewares/validator.handler.js";
import { userSchema } from "../schema/user.schema.js";

const router = Router()

router.post('/create', 
    validatorHandler(userSchema, 'body')
    ,(req, res) => {
    const { name, username, grade, rol,  mail, password } = req.body
    const user = new User(name, username, mail, rol, grade, password)
    user.setter().then((resolve) => {
        res.json(resolve)
    })
    
})

export default router
