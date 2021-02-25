import React, { Component, Fragment } from 'react';
// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation
// Fragment lets you group a list of children without adding extra nodes to the DOM
import { connect } from 'react-redux';
// connect function connects a react component to a redux store
import {Switch, Route } from 'react-router-dom';


class App extends Component {

  componentDidMount() {
    this.props.fetchNotes()
  }

  render () {

    return (
      <>
        <div className="App">
          <Switch>
            <Route path='/categories' />
          </Switch>          
        </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {

  return {
    fetchNotes: () => dispatch(fetchNotes())
  }
}

export default connect(null, mapDispatchToProps)(App);