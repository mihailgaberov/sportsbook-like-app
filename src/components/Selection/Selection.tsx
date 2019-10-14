import * as React from 'react';
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useMachine } from '@xstate/react';
import { bettingMachine } from '../../state-machines/betting-machine';
import { readRecord } from "../../utilities/localStorageService";

const useStyles = makeStyles({
  buttonLabel: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    margin: '0',
  },
  selection: {
    backgroundColor: 'black',
    color: 'white',
    margin: '7px',
    padding: '4px 14px',
    textAlign: 'center',
  },
  selectionAdded: {
    backgroundColor: '#00d29b',
  }
});

export default function Selection({ data }: { data: ISelectionType }) {
  const classes = useStyles();
  const [current, send] = useMachine(bettingMachine);

  const makeSelection = () => {
    send('TOGGLE_SELECTION', { data });
  };

  const isSelected = (selectionId: string) => readRecord(selectionId) || current.matches('success');

  return (
    <Button className={classes.selection} classes={{ label: classes.buttonLabel, root: isSelected(data.id) ? classes.selectionAdded : ''}} onClick={makeSelection}>
      <h5 className={classes.name}>{data.name}</h5>
      <span>{data.price}</span>
    </Button>
  );
}
