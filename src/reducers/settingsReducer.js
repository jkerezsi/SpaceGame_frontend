const initialState = {
    newKingdomName: '',
  };
  
  const changeKingdomName = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_KINGDOM_NAME':
        return{
        newKingdomName: action.payload
        };
      default:
        return state;
    }
  };
  
  export default changeKingdomName;
  