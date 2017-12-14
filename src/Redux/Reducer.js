export const showName = (state = {
    name: ''
}, action) => {
    switch(action.type) {
        case 'SHOW_NAME':
            state = {
                ...state,
                name: action.payload    
            }
        break;

        default:
        return state
    }
}