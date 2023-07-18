import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useParams, useHistory } from 'react-router-dom';
import {
  Typography, Button, Grid, Box, CircularProgress,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useGetActorQuery, useGetMovieByActorIdQuery } from '../../services/TMDB';
import useStyles from './styles';
import { MovieList, Pagination } from '../index';

function Actors() {
  const { id } = useParams();
  const history = useHistory();
  const { data, isFetching, error } = useGetActorQuery(id);
  const [page, setPage] = useState(1);
  const { data: movies } = useGetMovieByActorIdQuery({ id, page });
  const classes = useStyles();
  const theme = useTheme();
  const currentTheme = theme.palette.mode;

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress color={(currentTheme === 'dark') ? 'secondary' : 'primary'} size="8rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color="primary">
          Go back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container sapcing={3}>
        <Grid item lg={5} xl={4}>
          <img src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`} className={classes.profile} alt={data?.name} />
        </Grid>
        <Grid item direction="column" lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body1" align="justify" paragraph>
            {data?.biography || 'No Info available'}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button color={(currentTheme === 'dark') ? 'secondary' : 'primary'} variant="contained" target="_blank" href={`https://www.imdb.com/name/${data?.imdb_id}`}>
              IMDB
            </Button>
            <Button color={(currentTheme === 'dark') ? 'secondary' : 'primary'} startIcon={<ArrowBack />} onClick={() => history.goBack()}>
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">Movies</Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination currentPage={page} setPage={setPage} totalPages={movies?.total_pages} />
      </Box>
    </>
  );
}

export default Actors;
