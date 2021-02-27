function notesReducer(state = {notes: [], loading: false}, action) {

    switch(action.type) {
        case 'LOADING_NOTES':
            return {
                ...state,
                notes: [...state.notes],
                loading: true
            }
        case 'SET_NOTES':
            return {
                ...state,
                notes: action.notes,
                loading: false
            }
        default:
            return state;
    }
}

export default notesReducer;