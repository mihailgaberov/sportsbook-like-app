import { assign, Machine } from 'xstate';

const fetchData = () =>
  fetch(`https://www.mocky.io/v2/59f08692310000b4130e9f71`).then(response => response.json());

export const sportsDataMachine = Machine({
  id: 'sdm',
  initial: 'idle',
  states: {
    idle: {
      on: {
        FETCH: 'loading'
      }
    },
    loading: {
      invoke: {
        id: 'getData',
        src: () => fetchData(),
        onDone: {
          target: 'success',
          actions: assign({ data: (context: any, event: { data: []; }) => event.data })
        },
        onError: {
          target: 'failure',
          actions: assign({ error: (context: any, event: { data: []; }) => event.data })
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: 'loading'
      }
    }
  }
});
