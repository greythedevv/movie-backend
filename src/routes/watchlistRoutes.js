import express from "express"
import { addToWatchList, removeFromWatchList, updateWatchListItem } from "../controllers/watchlistControlers.js"
import { authMiddleware } from "../middleware/authMiddleware.js"
import { validateRequest } from "../middleware/validateRequest.js"
import {addToWatchSchema} from "../validators/wathlistValidators.js"

const router = express.Router()
// all routes in this file will require authentication
router.use(authMiddleware)

// to add a movie to the watchlist, we need the movie id and the user id
router.post("/", validateRequest(addToWatchSchema), addToWatchList )
// router.post("/login", login )
// router.post("/logout", logout)


// to remove a movie from the watchlist, we need the movie id and the user id
router.delete("/:id", removeFromWatchList )

// update watchlist item
router.put("/:id", updateWatchListItem) 

export default router