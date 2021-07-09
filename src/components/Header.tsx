import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    width: '100%',
    height: '56px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    filter: 'dropShadow(16px 16px 10px black)'
  }
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <h1>Movie Search</h1>
    </div>
  );
};

export default Header;
