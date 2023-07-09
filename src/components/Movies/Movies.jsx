import React, { useState, useEffect } from 'react';
import {
  Box, CircularProgress, useMediaQuery, Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/TMDB';
import MovieList from '../MovieList/MovieList';


function Movies() {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">No Movies match that name <br /> Search something else</Typography>
      </Box>
    );
  }

  if (error) return 'An error occured';
  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
}

export default Movies;
