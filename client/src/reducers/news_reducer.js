export default function(state = {}, action){
    switch(action.type){
        case 'NEWS':
            return {
                ...state, 
                news: action.payload
            }
        case 'SAVED_NEWS':
            return {
                ...state,
                news: action.payload
            }
        default:
            return state;
    }
};
