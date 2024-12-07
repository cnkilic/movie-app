import React from 'react'
import { useAppSelector } from '../../redux/hooks'

function HomePage() {
    const { movies, moviesLoading } = useAppSelector(state => state.movies)
    console.log("🚀 ~ HomePage ~ moviesLoading:", moviesLoading)
    console.log("🚀 ~ HomePage ~ movies:", movies)

    return (
        <div>HomePage</div>
    )
}

export default HomePage