import { prisma } from "../config/db"

const addToWatchList = async (req, res)=>{
    const {movieId, status, rating, notes} = req.body

    // verify movie exist 
    const movie = await prisma.movie.findUnique({where: {id: movieId}})

    if(!movie){
        return res.status(404).json({error: "movie not found"})
    }

    // check if  already added

    const existingInWatchlist = await prisma.movie.findUnique({
        where: {userId_movieId: {
            userId: req.user.id,
            movieId: movieId,
        },},})

          if(existingInWatchlist){
        return res.status(400).json({error: "movie not found"})
    }
    

    const watchlistItem = await prisma.prisma.watchlistItem.create({
        data:{
            userId: req.user.id,
            movieId,
            status: status || "PLLANED",
            rating,
            notes,
        }
    })

    res.status(201).json({
        status: "Success",
        data: {
            watchlistItem,
        }
    })
}

export {addToWatchList}