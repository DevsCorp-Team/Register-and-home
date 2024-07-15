import { createClient } from "@libsql/client";
import dotenv from "dotenv";

dotenv.config()

const db = createClient({
    url: process.env.DB_URL,
    authToken: process.env.BD_AUTH,
})

export class User {
    constructor (name, username, mail, role, grade, passwd){
        this.name = name
        this.username = username
        this.mail = mail
        this.role = role
        this.grade = grade
        this.passwd = passwd
    }

    setter() {
        return new Promise( async(resolve, reject) => {
            const name = this.name
            const username = this.username
            const mail = this.mail
            const rol = this.role
            const grade = this.grade
            const passwd = this.passwd

            try {
                await db.execute({
                    sql: 'insert into users (name, username, mail, rol, grade, passwd) values (:name, :username, :mail, :rol, :grade, :passwd)',
                    args: { name, username, mail, rol, grade, passwd }
                })
            } catch (err) {
                return reject(err)
            }
            return resolve({message: "User Created"})
        })
    }

}
