import { Router } from "express";
import { authenticateToken } from "../controllers/protected.controller.js";

const router=Router();

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Protected route accessed successfully' });
});

export default router;