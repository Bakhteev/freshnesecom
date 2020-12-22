const initialState = {
    items: [],
};

const product = (state = initialState, action) => {
    if (action.type === 'SET_PRODUCTS') {
        return {
            ...state,
            items: action.payload,
        };
    }
    return state;
};

export default product;