import * as React from "react";
import { useContext } from "react";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { readAllFromStorage } from "../../utilities/localStorageService";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { bettingMachine } from "../../state-machines/betting-machine";
import { useMachine } from "@xstate/react/lib";
import { SelectionsContext } from "../../utilities/SelectionsProvider";

const useStyles = makeStyles({
  closeButton: {
    margin: "7px"
  },
  list: {
    textAlign: "right",
    width: 300
  }
});

export default function Betslip() {
  type DrawerSide = "right";

  const classes = useStyles();
  const { dispatch } = useContext(SelectionsContext);
  const [state, setState] = React.useState({
    right: false,
    data: readAllFromStorage()
  });

  const [, send] = useMachine(bettingMachine);

  const toggleDrawer = (side: DrawerSide, isOpen: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: isOpen, data: readAllFromStorage() });
  };

  const removeSelection = (e: React.MouseEvent): any => {
    const selectionId = e.currentTarget.parentElement
      ? e.currentTarget.parentElement.dataset.selelectionId
      : null;

    if (selectionId) {
      const arrData = [...state.data];
      const elementToRemove = arrData.filter(el => {
        if (el) {
          return JSON.parse(el).id === selectionId;
        }
        return null;
      })[0];

      if (elementToRemove) {
        send("TOGGLE_SELECTION", { data: JSON.parse(elementToRemove) });

        const idx = arrData.indexOf(elementToRemove);
        arrData.splice(idx, 1);
        setState({ ...state, data: arrData });
        dispatch({ type: "TOGGLE_SELECTIONS_STATE", payload: selectionId });
      }
    }
  };

  const sideList = (side: DrawerSide) => (
    <div className={classes.list} role="presentation">
      <Button
        onClick={toggleDrawer(side, false)}
        className={classes.closeButton}
      >
        X
      </Button>
      <List>
        {state.data.map(sel => {
          if (sel) {
            const parsedSelectionObj = JSON.parse(sel);
            return (
              <ListItem
                button={true}
                key={parsedSelectionObj.id}
                data-selelection-id={parsedSelectionObj.id}
              >
                <ListItemText secondary={parsedSelectionObj.name} />
                <ListItemText primary={parsedSelectionObj.price} />
                <Button onClick={removeSelection}>Delete</Button>
              </ListItem>
            );
          }
          return;
        })}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>Open Betslip</Button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
