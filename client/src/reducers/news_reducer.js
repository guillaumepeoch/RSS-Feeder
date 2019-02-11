// // 1 Action returns an object
// const action = {
//     type:'NEWS',
//     payload:[

//     ]
// };

// 2 Reducer finds a match
export default function(state = {}, action){
    switch(action.type){
        case 'NEWS':
            return {
                ...state, 
                news: action.payload
            }
        default:
            return state;
    }
};