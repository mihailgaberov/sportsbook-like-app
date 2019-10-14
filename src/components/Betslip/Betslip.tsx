import * as React from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import { readAllFromStorage } from '../../utilities/localStorageService';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

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
    right: true,
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
        {readAllFromStorage().map(sel => {
          if (sel) {
            const parsedSelectionObj = JSON.parse(sel);
            return <ListItem button={true} key={parsedSelectionObj.id} data-selelection-id={parsedSelectionObj.id}>
              <ListItemText secondary={parsedSelectionObj.name} />
              <ListItemText primary={parsedSelectionObj.price} />
              <Button onClick={removeSelection}>Delete</Button>
            </ListItem>
          }
          return;
        })}
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
