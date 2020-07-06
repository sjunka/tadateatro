import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import SignUp from './SignUp';
import MainFeaturedPost from './MainFeaturedPost';
import Drawer from './Drawer';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  const [openDrawer, SetOpenDrawer] = useState(false);

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => SetOpenDrawer((preOpenDrawer) => true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Tada Teatro
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <Drawer
          open={openDrawer}
          close={() => SetOpenDrawer((preOpenDrawer) => false)}
        ></Drawer>
      </Box>

      <MainFeaturedPost />
      <ProTip />

      <SignUp />
    </Container>
  );
}
