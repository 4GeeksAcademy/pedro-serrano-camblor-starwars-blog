export const initialStore = () => {
  return {
    message: null,

    characters: [],
    characterDetails: [],

    planets: [],
    planetDetails: [],

    starships: [],
    starshipDetails: [],
    
    favs: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'update_characters':

      return {
        ...store,
        characters: action.payload
      };

    case 'update_characterDetails':

      return {
        ...store,
        characterDetails: action.payload
      };

    case 'update_planets':

      return {
        ...store,
        planets: action.payload
      };

    case 'update_planetDetails':

      return {
        ...store,
        planetDetails: action.payload
      };

    case 'update_starships':

      return {
        ...store,
        starships: action.payload
      };

    case 'update_starshipDetails':

      return {
        ...store,
        starshipDetails: action.payload
      };

    case 'add_favs':

      return {
        ...store,
        favs: store.favs.concat(action.payload)
      };

    default:
      throw Error('Unknown action.');
  }
}