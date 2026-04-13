import express from "express"
import { addToWatchList, removeFromWatchList, updateWatchListItem } from "../controllers/watchlistControlers.js"
import { authMiddleware } from "../middleware/authMiddleware.js"

const router = express.Router()
// all routes in this file will require authentication
router.use(authMiddleware)

// to add a movie to the watchlist, we need the movie id and the user id
router.post("/", addToWatchList )
// router.post("/login", login )
// router.post("/logout", logout)


// to remove a movie from the watchlist, we need the movie id and the user id
router.delete("/:id", removeFromWatchList )

// update watchlist item
router.put("/:id", updateWatchListItem) 

export default router