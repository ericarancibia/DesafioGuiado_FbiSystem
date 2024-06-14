import { Router } from "express"
import { login, restrictedDashboard } from "../controllers/agent.controller.js"

const router = Router()

router.get("/login", login)
router.get("/dashboard", restrictedDashboard)

export default router