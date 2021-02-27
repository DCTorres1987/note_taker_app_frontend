export const fetchNotes = () => {

    return (dispatch) => {
        dispatch({type: 'LOADING_NOTES'})
        fetch(`http://localhost:3001/categories`)
            .then(res => res.json())
            .then(data => dispatch({type: 'SET_NOTE', categories: data}))
    }
}