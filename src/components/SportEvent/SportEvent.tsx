import * as React from 'react';

export default function SportEvent({title, markets = []}: {title: string, markets: IMarketType[]}) {

  return (
    <React.Fragment>
      <h2>{title}</h2>
      {markets.map(market => (<div key={market.id}>{market.name}</div>))})
    </React.Fragment>
  );
}
