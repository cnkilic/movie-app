import { useState, useEffect, } from 'react'

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

import { fetchMoviesThunk } from '../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AsyncStatus } from '../../constants/common';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function HomePage() {
    const dispatch = useAppDispatch()
    const { movies, moviesStatus, moviesError, totalResults } = useAppSelector(state => state.movies)

    const [searchString, setSearchString] = useState("Pokemon");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        dispatch(fetchMoviesThunk({ searchString, year, type, page: "1" }))
    }, [])

    const handleSearch = () => {
        console.log("first ")
        dispatch(fetchMoviesThunk({ searchString, year, type, page: "1" }))
    };

    return (
        <Container className="app-container">
            <h1>Movie Explorer</h1>
            <div className="search-container">
                <TextField
                    label="Search"
                    variant="outlined"
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
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

            {movies && totalResults && moviesStatus !== AsyncStatus.Loading ?
                (<TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Release Date</TableCell>
                                <TableCell>IMDb ID</TableCell>
                                <TableCell>Type</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {movies?.length > 0 ?
                                (
                                    movies.map((movie) => (
                                        <TableRow key={movie.imdbID}>
                                            <TableCell>{movie.Title}</TableCell>
                                            <TableCell>{movie.Year}</TableCell>
                                            <TableCell>{movie.imdbID}</TableCell>
                                            <TableCell>{movie.Type}</TableCell>
                                        </TableRow>
                                    ))
                                )
                                :
                                <div className='no-data-warning'>
                                    There is no data with this filter selection
                                </div>
                            }
                        </TableBody>

                    </Table>
                </TableContainer>)
                :
                (<div className='error-message'>
                    {`${moviesError || "Some Error occured please refresh page"}`}
                </div>)
            }
            {moviesStatus === AsyncStatus.Loading && <LoadingSpinner />}

        </Container>

    )
}

export default HomePage

