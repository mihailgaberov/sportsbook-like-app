import * as React from 'react';
import Market from "../Market";
import Divider from '@material-ui/core/Divider';

export default function SportEvent({name, markets = [], toUnselectId}: {name: string, markets: IMarketType[], toUnselectId: string}) {

  return (
    <React.Fragment>
      <h2>{name}</h2>
      {markets.map(market => {
        return <React.Fragment key={market.id}>
          <Market selections={market.selections} name={market.name} toUnselectId={toUnselectId} />
          <Divider light={true} />
        </React.Fragment>
      })}
    </React.Fragment>
  );
}
