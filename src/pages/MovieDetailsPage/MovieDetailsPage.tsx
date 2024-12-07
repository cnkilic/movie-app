import { useEffect } from 'react'
import { useParams } from 'react-router'
import { movieAppApi } from '../../api'

function MovieDetailsPage() {
    const { imdbId } = useParams()

    const fetchMovieDetails = async () => {
        const movieDetailsData = await movieAppApi.getMovieDetails({
            imdbId: "tt10540298",
        })

        console.log("🚀 ~ fetchMovies ~ moviesData:", movieDetailsData)
    }

    useEffect(() => {
        fetchMovieDetails()
    }, [])

    console.log("🚀 ~ MovieDetailsPage ~ imdbID:", imdbId)
    return (
        <div>MovieDetailsPage</div>
    )
}

export default MovieDetailsPage