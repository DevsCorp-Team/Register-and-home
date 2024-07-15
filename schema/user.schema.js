import joi from "joi";

const name = joi.string().min(10)
const username = joi.string().min(3)
const grade = joi.number().integer().min(10).max(11)
const mail = joi.string().email()
const rol = joi.string()
const password = joi.string().min(6)

export const userSchema = joi.object({
    name: name.required(),
    username: username.required(),
    grade: grade.required(),
    mail: mail.required(),
    rol: rol.required(),
    password: password.required()
})
