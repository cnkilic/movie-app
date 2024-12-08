import { Movies } from "../../types/types";

import { useNavigate, generatePath } from 'react-router';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

interface IMovieTableProps {
  movies: Movies
  setCurrentPage: (page: string) => void
  currentPage: string
  totalResults: string
}

const MovieTable = ({ movies, setCurrentPage, currentPage, totalResults }: IMovieTableProps) => {
  const navigate = useNavigate();

  const rowsPerPage = 10

  const handleChangePage = (_: unknown, newPage: number) => {
    setCurrentPage(String(newPage));
  };

  const handleRowSelect = (imdbID: string) => {
    navigate(generatePath("/detail/:imdbId", { imdbId: imdbID }))
  }

  return (
    < TableContainer component={Paper} >
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
                <TableRow key={movie.imdbID} onClick={() => handleRowSelect(movie.imdbID)}>
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
            </div>}
        </TableBody>
      </Table>

      {/* Table Pagination */}
      <TablePagination
        component="div"
        count={Number(totalResults)}
        page={Number(currentPage)}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 10]}
        labelRowsPerPage="Rows Per Page:"
      />
    </TableContainer>
  )
}


export default MovieTable