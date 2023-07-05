import React, { useEffect } from 'react';
import {
  Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styles';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const demoCategories = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' },
];

const redLogo = 'https://fontmeme.com/permalink/230705/457fbd7c5a48db33b646e25c9ecc8547.png';
const blueLogo = 'https://fontmeme.com/permalink/230705/ec893bbadc2f399c494fcb30b3644279.png';

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>

      <Link to="/" className={classes.imageLink}>
        <img className={classes.image} src={theme.palette.mode === 'light' ? blueLogo : redLogo} alt="CINESTHETIC LOGO" />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                <img src={redLogo} className={classes.genreImages} height={30} />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}

      </List>
    </>
  );
}

export default Sidebar;
