export default function helloworld(
  state = {
    say_hi: '',
    say_hi_saga: '',
  },
  action,
) {
  switch (action.type) {
    case 'HELLO_WORLD_REQUESTED': {
      return {
        ...state,
        say_hi: 'Hello World!',
      };
    }
    case 'HELLO_WORLD_SAGA_SUCCEEDED': {
      return {
        ...state,
        say_hi_saga: action.payload,
      };
    }
    case 'HELLO_WORLD_SAGA_FAILED': {
      return {
        ...state,
        say_hi_saga: 'API call is failed.',
      };
    }
    default:
      return state;
  }
}
