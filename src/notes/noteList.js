import React from 'react';
import { connect } from 'react-redux';

const NoteList = ({noteList}) => {
    console.log(noteList);
}

const mapStateToProps = (state) => {

    return {
        notesList: state.notes.notes,
        loading: state.loading
    }
}

export default connect(mapStateToProps)(NoteList);