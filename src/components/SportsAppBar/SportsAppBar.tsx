import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../images/logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      height: '38px',
      margin: '22px 35px 22px 0',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
      backgroundColor: 'black',
    }
  }),
);

export default function SportsAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            <img alt={'logo'} src={logo} className={classes.logo}/>
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
