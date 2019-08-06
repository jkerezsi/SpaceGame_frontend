const initialState = {
  newKingdomName: '',
};

const changeKingdomName = (state = initialState, action) => {
  switch (action.type) {
    case 'KINGDOM_NAME_CHANGED':
      localStorage.setItem('kingdomName', action.payload.kingdomName);
      return {
        newKingdomName: action.payload.kingdomName,
      };
    default:
      return state;
  }
};

export default changeKingdomName;
