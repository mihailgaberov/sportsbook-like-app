import * as React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
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
});

export default function Selection({name, price}: {name: string, price: number}) {
  const classes = useStyles();

  return (
    <div className={classes.selection}>
      <h5 className={classes.name}>{name}</h5>
      <span>{price}</span>
    </div>
  );
}
