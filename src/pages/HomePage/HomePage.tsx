import { useState, useEffect, } from 'react'

import {
    Container,
    TextField,
    Button,
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
import MovieTable from '../../components/MovieTable/MovieTable';
import useSubmitState from '../../hooks/useSubmitState';

function HomePage() {
    const dispatch = useAppDispatch()
    const { movies, moviesStatus, moviesError, totalResults } = useAppSelector(state => state.movies)

    const [searchString, setSearchString] = useState<string>("Pokemon");
    const [year, setYear] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<string>("0");

    const { isButtonDisabled, warning } = useSubmitState(searchString);

    useEffect(() => {
        dispatch(fetchMoviesThunk({ searchString, year, type, page: String(Number(currentPage) + 1) }))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    const handleSearch = () => {
        dispatch(fetchMoviesThunk({ searchString, year, type, page: "1" }))
    };

    return (
        <Container className="app-container">
            <h1>Movie Explorer</h1>
            <div className="search-container">
                <TextField
                    label="Search"
                    required
                    variant="outlined"
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    fullWidth
                    error={!!warning}
                    helperText={warning}
                />
                <FormControl fullWidth>
                    <InputLabel className='selectLabel' id="type-select-label">Type</InputLabel>
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
                    disabled={isButtonDisabled}
                >
                    Search
                </Button>
            </div>
            {moviesStatus !== AsyncStatus.Loading
                ? movies && totalResults ?
                    <MovieTable movies={movies} setCurrentPage={setCurrentPage} currentPage={currentPage} totalResults={totalResults} />
                    :
                    (<div className='error-message'>
                        {`${moviesError || "Some Error occured please refresh page"}`}
                    </div>)

                : <LoadingSpinner />
            }

        </Container >

    )
}

export default HomePage
