import {z} from "zod"

// 
const addToWatchSchema = z.object({
    movieId: z.string().uuid(),
    status: z.enum([
        "PLANNED",
        "WATCHING",
        "COMPLETED",
        "DROPPED"
    ],{
        error: ()=>({
            message: "status must be one of: PLANNED, WATCHED, COMPLETED, DROPPED",
        })
    }).optional(),
    rating: z.coerce.number.int("Rating must be an integer").min(1, "Rating must be between 1 and 10").max(10, "Rating must be between 1 and 10").optional(),
    notes: z.string().optional(),
})

export {addToWatchSchema}