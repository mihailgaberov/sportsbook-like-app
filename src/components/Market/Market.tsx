import * as React from 'react';
import Selection from "../Selection";

export default function Market({title, selections = []}: {title: string, selections: ISelectionType[]}) {

  return (
    <React.Fragment>
      <h2>{title}</h2>
      {selections.map(sel => <Selection key={sel.id} name={sel.name} price={sel.price} />)}
    </React.Fragment>
  );
}
