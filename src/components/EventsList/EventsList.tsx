import * as React from 'react';
import Container from '@material-ui/core/Container';
import SportEvent from '../SportEvent';
import Divider from "@material-ui/core/Divider";


export default function EventsList({events, toUnselectId}: {events: IEventType[], toUnselectId: string}) {
  return (
    <Container maxWidth="sm">
      {events.map(event => {
        return <React.Fragment key={event.id}>
          <SportEvent name={event.name} markets={event.markets} toUnselectId={toUnselectId} /><Divider />
        </React.Fragment>
      })}
    </Container>
  );
}
