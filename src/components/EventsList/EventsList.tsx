import * as React from 'react';
import Container from '@material-ui/core/Container';
import SportEvent from '../SportEvent';


export default function EventsList({events}: {events: IEventType[]}) {

  return (
    <Container maxWidth="sm">
      {events.map(event => <SportEvent key={event.id} name={event.name} markets={event.markets} />)}
    </Container>
  );
}
