import * as React from 'react';
import Selection from "../Selection";

export default function Market({name, selections = []}: {name: string, selections: ISelectionType[]}) {

  return (
    <React.Fragment>
      <h3>{name}</h3>
      {selections.map(sel => <Selection key={sel.id} name={sel.name} price={sel.price} />)}
    </React.Fragment>
  );
}
