import { Router } from "express";

const router = Router()

router.post('/create', (req, res) => {
    res.json(req.body)
})

export default router
