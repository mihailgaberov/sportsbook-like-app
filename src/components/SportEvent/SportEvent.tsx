import * as React from 'react';
import Market from "../Market";

export default function SportEvent({name, markets = []}: {name: string, markets: IMarketType[]}) {

  return (
    <React.Fragment>
      <h2>{name}</h2>
      {markets.map(market => <Market key={market.id} selections={market.selections} name={market.name} />)}
    </React.Fragment>
  );
}
