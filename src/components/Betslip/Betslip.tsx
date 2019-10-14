import * as React from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  closeButton: {
    margin: '7px',
  },
  list: {
    textAlign: 'right',
    width: 300,
  },
});

export default function Betslip() {
  type DrawerSide = 'right';

  const classes = useStyles();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side: DrawerSide, isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: isOpen });
  };

  const removeSelection = (e: React.MouseEvent): any => {
    // @ts-ignore
    console.log(e.currentTarget.parentElement.dataset.selelectionId);
  };

  const sideList = (side: DrawerSide) =>
    <div
      className={classes.list}
      role="presentation"
    >
      <Button onClick={toggleDrawer(side, false)} className={classes.closeButton}>X</Button>
      <List>
        <ListItem button={true} key={'SEL_1'} data-selelection-id={'SEL_1'}>
          <ListItemText secondary={'Real Madrid to WIN'} />
          <ListItemText primary={'1.2'} />
          <Button onClick={removeSelection}>Delete</Button>
        </ListItem>
        <Divider />
        <ListItem button={true} key={'SEL_4'} data-selelection-id={'SEL_4'}>
          <ListItemText secondary={'Messi to Score First'} />
          <ListItemText primary={'1.3'} />
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
