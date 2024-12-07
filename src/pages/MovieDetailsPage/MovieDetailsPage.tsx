import React from 'react'
import { useParams } from 'react-router'

function MovieDetailsPage() {
    const { imdbId } = useParams()
    console.log("🚀 ~ MovieDetailsPage ~ imdbID:", imdbId)
    return (
        <div>MovieDetailsPage</div>
    )
}

export default MovieDetailsPage