import express from "express"
import { addToWatchList } from "../controllers/watchlistControlers.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const router = express.Router()
router.use(authMiddleware)

router.post("/", addToWatchList )
// router.post("/login", login )
// router.post("/logout", logout)



export default router