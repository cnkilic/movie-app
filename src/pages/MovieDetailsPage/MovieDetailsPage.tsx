import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
    Container,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Grid,
    Box,
} from "@mui/material";
import "./MovieDetailsPage.scss";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchMovieByImdbIdThunk } from "../../redux/slices";
import { AsyncStatus } from "../../constants/common";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function MovieDetailPage() {
    const { imdbId } = useParams<{ imdbId: string }>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { movieDetails, movieDetailsStatus, movieDetailsError } = useAppSelector(
        (state) => state.movieDetail
    );

    console.log("🚀 ~ MovieDetailPage ~ movieDetails:", movieDetails)

    useEffect(() => {
        if (imdbId) {
            dispatch(fetchMovieByImdbIdThunk({ imdbId }));
        }
    }, [dispatch, imdbId]);

    if (movieDetailsStatus === AsyncStatus.Loading) {
        return <LoadingSpinner />;
    }

    if (movieDetailsError || !movieDetails) {
        return (
            <Container className="movie-detail-container">
                <Typography variant="h6" color="error" textAlign="center">
                    {movieDetailsError || "Movie details could not be fetched. Please try again later."}
                </Typography>
                <Box textAlign="center" mt={2}>
                    <Button variant="contained" onClick={() => navigate("/")}>
                        Back to Home
                    </Button>
                </Box>
            </Container>
        );
    }

    return (
        <Container className="movie-detail-container">
            <Card className="movie-detail-card">
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <CardMedia
                            component="img"
                            alt={movieDetails.Title}
                            image={movieDetails.Poster !== "N/A" ? movieDetails.Poster : "/placeholder-image.jpg"}
                            className="movie-poster"
                        />
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                {movieDetails.Title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                                IMDb Rating: {movieDetails.imdbRating} ({movieDetails.imdbVotes} votes)
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                                Year: {movieDetails.Year} | Released: {movieDetails.Released}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Genre:</strong> {movieDetails.Genre}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Director:</strong> {movieDetails.Director}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Writer:</strong> {movieDetails.Writer}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <strong>Actors:</strong> {movieDetails.Actors}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <strong>Plot:</strong> {movieDetails.Plot}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <strong>Awards:</strong> {movieDetails.Awards}
                            </Typography>

                            <Box mt={2}>
                                <Button variant="contained" color="primary" onClick={() => navigate("/")}>
                                    Back to Home
                                </Button>
                            </Box>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
}

export default MovieDetailPage;
