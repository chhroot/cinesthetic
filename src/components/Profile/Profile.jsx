import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

import { userSelector } from '../../features/auth';

function Profile() {
  const { user } = useSelector(userSelector);

  const favoriteMovies = [];

  const logout = () => {
    localStorage.clear();

    window.location.href = '/';
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>My Profile</Typography>
        <Button color="inherit" onclick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length
        ? <Typography variant="5">Add Favorites or watchlist some movies to see them here!</Typography>
        : (
          <Box>
            FAVOURITE MOVIES
          </Box>
        )}

    </Box>
  );
}

export default Profile;
