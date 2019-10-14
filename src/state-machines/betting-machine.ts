import { assign, Machine } from 'xstate';
import { fakeBet } from '../utilities/common';

export const bettingMachine = Machine({
  id: 'bm',
  initial: 'idle',
  states: {
    idle: {
      on: {
        TOGGLE_SELECTION: 'loading'
      }
    },
    loading: {
      invoke: {
        id: 'addSelection',
        src: (context, event) => fakeBet(context, event),
        onDone: {
          target: 'success',
          actions: assign({
            data: (context: any, event: { data: {}; }) => event.data })
        },
        onError: {
          target: 'idle',
          actions: assign({ error: (context: any, event: { data: {}; }) => event.data })
        }
      }
    },
    success: {
      on: {
        TOGGLE_SELECTION: 'loading'
      }
    }
  }
});

export const toggleMachine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' }
    },
    active: {
      on: { TOGGLE: 'inactive' }
    }
  }
});
