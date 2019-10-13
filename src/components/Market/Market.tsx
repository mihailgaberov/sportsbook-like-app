import * as React from 'react';
import Selection from "../Selection";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  marketName: {
    color: 'lightgrey',
  }
});


export default function Market({name, selections = []}: {name: string, selections: ISelectionType[]}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <h3 className={classes.marketName}>{name}</h3>
      {selections.map(sel => <Selection key={sel.id} name={sel.name} price={sel.price} />)}
    </React.Fragment>
  );
}
