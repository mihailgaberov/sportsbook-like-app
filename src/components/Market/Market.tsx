import * as React from "react";
import Selection from "../Selection";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  marketName: {
    color: "grey",
    margin: "14px 0"
  },
  marketSelections: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default function Market({
  name,
  selections = []
}: {
  name: string;
  selections: ISelectionType[];
}) {
  const classes = useStyles();

  return (
    <>
      <h3 className={classes.marketName}>{name}</h3>
      <Box className={classes.marketSelections}>
        {selections.map(sel => (
          <Selection key={sel.id} data={sel} />
        ))}
      </Box>
    </>
  );
}
