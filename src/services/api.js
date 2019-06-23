export const HelloWorldApi = () => ({ name: 'Hello World' });

export const StarWarsApi = () => fetch('https://swapi.co/api/people/1/')
  .then(res => res.json());
