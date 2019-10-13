import * as React from 'react';

export default function Selection({name, price}: {name: string, price: number}) {

  return (
    <React.Fragment>
      <h5>{name}</h5>
      <span>{price}</span>
    </React.Fragment>
  );
}
