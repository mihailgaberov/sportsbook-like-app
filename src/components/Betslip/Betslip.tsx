import * as React from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

/*type SelectionType = {
  id: string;
  name: string;
  price: number;
}*/

const useStyles = makeStyles({
  list: {
    width: 300,
  }
});

export default function Betslip() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  type DrawerSide = 'right';
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const removeSelection = (e: React.MouseEvent): any => {
    console.log(e.currentTarget.parentElement);
  };

  const sideList = (side: DrawerSide) =>
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button={true} key={'SEL_1'} data-selelection-id={'SEL_1'}>
          <ListItemText secondary={'Real Madrid to WIN'} />
          <ListItemText primary={'1.2'} />
          <Button onClick={removeSelection}>Delete</Button>
        </ListItem>
        <Divider />
        <ListItem button={true} key={'SEL_4'} data-selelection-id={'SEL_4'}>
          <ListItemText secondary={'Messi to Score First'} />
          <ListItemText primary={'1.3'}  />
          <Button onClick={removeSelection}>Delete</Button>
        </ListItem>
        <Divider />
      </List>
    </div>;

  return (
    <div>
      <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}
