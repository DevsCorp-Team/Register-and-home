import { Router } from "express";

const router = Router()

router.post('/create', (req, res) => {
    const { fullName, username, grade, email, password } = req.body
    res.json({
        "message": "User Registed"
    })
})

export default router
