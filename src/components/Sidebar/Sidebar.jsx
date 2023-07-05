import React, { useEffect } from 'react';
import {
  Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styles';

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();
  const redLogo = 'https://fontmeme.com/permalink/230705/457fbd7c5a48db33b646e25c9ecc8547.png';
  const blueLogo = 'https://fontmeme.com/permalink/230705/ec893bbadc2f399c494fcb30b3644279.png';

  return (
    <Link to="/" className={classes.imageLink}>
      <img className={classes.image} src={theme.palette.mode === 'light' ? blueLogo : redLogo} alt="CINESTHETIC LOGO" />

    </Link>
  );
}

export default Sidebar;
