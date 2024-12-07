import { useState, useEffect, } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { movieAppApi } from '../../api'


import {
    Container,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";

import "./HomePage.scss";
import { Movies } from '../../types/movies';

function HomePage() {
    // const { movies, moviesLoading } = useAppSelector(state => state.movies)
    // console.log("🚀 ~ HomePage ~ moviesLoading:", moviesLoading)
    // console.log("🚀 ~ HomePage ~ movies:", movies)

    const [movies, setMovies] = useState<Movies>([]);
    const [searchTerm, setSearchTerm] = useState("Pokemon");
    const [year, setYear] = useState("");
    const [type, setType] = useState("movie");

    const fetchMovies = async () => {
        try {
            const moviesData = await movieAppApi.getMovies({
                searchString: "pokemon",
                page: "1",
                type: "movie",
                year: "2017"
            })

            console.log("🚀 ~ fetchMovies ~ moviesData:", moviesData)
            setMovies(moviesData.Search || []);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }



    useEffect(() => {
        fetchMovies()
    }, [])


    const handleSearch = () => {
        fetchMovies();
    };

    return (
        <Container className="app-container">
            <h1>Movie Explorer</h1>
            <div className="search-container">
                <TextField
                    label="Search"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    fullWidth
                />
                <FormControl fullWidth>
                    <InputLabel id="type-select-label">Type</InputLabel>
                    <Select
                        labelId="type-select-label"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <MenuItem value="movie">Movie</MenuItem>
                        <MenuItem value="series">TV Series</MenuItem>
                        <MenuItem value="episode">Episode</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="Year"
                    variant="outlined"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    fullWidth
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSearch}
                    className="search-button"
                >
                    Search
                </Button>
            </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Release Date</TableCell>
                            <TableCell>IMDb ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map((movie) => (
                            <TableRow key={movie.imdbID}>
                                <TableCell>{movie.Title}</TableCell>
                                <TableCell>{movie.Year}</TableCell>
                                <TableCell>{movie.imdbID}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default HomePage

