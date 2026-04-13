import express from "express"
import { addToWatchList } from "../controllers/watchlistControlers.js"

const router = express.Router()

router.post("/", addToWatchList )
// router.post("/login", login )
// router.post("/logout", logout)



export default router