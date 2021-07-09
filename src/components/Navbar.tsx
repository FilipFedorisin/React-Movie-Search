import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Favorite, Search } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    color: '#b5b5b5'
  },
  container: {
    width: '100%',
    position: 'fixed',
    bottom: '0',
    backgroundColor: '#E8E8E8',
    filter: 'dropShadow(16px 16px 10px black)'
  }
});

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) history.push('/');
    else if (value === 1) history.push('/favorites');
  });

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={(classes.root, classes.container)}
    >
      <BottomNavigationAction
        className={classes.root}
        label="Search"
        icon={<Search />}
        style={{ width: 'auto' }}
      />

      <BottomNavigationAction
        className={classes.root}
        label="Favorites"
        icon={<Favorite />}
        style={{ width: 'auto' }}
      />
    </BottomNavigation>
  );
};

export default Navbar;
