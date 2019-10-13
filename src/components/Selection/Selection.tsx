import * as React from 'react';

export default function Selection({name, price}: {name: string, price: number}) {

  return (
    <React.Fragment>
      <h2>{name}</h2>
      <span>{price}</span>
    </React.Fragment>
  );
}
