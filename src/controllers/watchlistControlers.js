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

const removeFromWatchList = async (req, res)=>{
    const watchlistItem = await prisma.watchListItem.findUnique({
        where: {id: req.params.id}
    })
    // check if the item exist and belongs to the user
    if (!watchlistItem || watchlistItem.userId !== req.user.id){
        return res.status(404).json({error: "watchlist item not found"})
    }

    await prisma.watchListItem.delete({
        where: {id: req.params.id}
    })

    res.status(200).json({
        status: "success",
        message: "movie removed from watchlist"
    })

}

// TODO: implement update watchlist item

const updateWatchListItem = async (req, res)=>{
    const {status, rating, notes} = req.body
    // find the watchlist item by id

    const watchlistItem = await prisma.watchListItem.findUnique({
        where: {id: req.params.id}
    })

    // check if the item exist and belongs to the user
    if (!watchlistItem || watchlistItem.userId !== req.user.id){
        return res.status(404).json({error: "watchlist item not found"})
    }

    // build the update data object based on the provided fields
    const updateData = {}
    if (status != undefined) updateData.status = status.toUpperCase()
    if (rating != undefined) updateData.rating = rating
    if (notes != undefined) updateData.notes = notes

    // update the watchlist item in the database
    
    const updatedItem = await prisma.watchListItem.update({
        where: {id: req.params.id},
        data: updateData,
    })

    res.status(200).json({
        status: "success",
        data: {
            watchlistItem: updatedItem,
        }
    })


}

export {addToWatchList, removeFromWatchList, updateWatchListItem}