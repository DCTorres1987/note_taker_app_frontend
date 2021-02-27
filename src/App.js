import React, { Component, Fragment } from 'react';
// Components let you split the UI into independent, reusable pieces, and think about each piece in isolation
// Fragment lets you group a list of children without adding extra nodes to the DOM
import { connect } from 'react-redux';
// connect function connects a react component to a redux store
import {Switch, Route } from 'react-router-dom';
// renders the first child <Route> or <Redirect> that matches the location

import { fetchNotes } from './actions/loadNotes';

// create a class component that will be universal to all components
class App extends Component {
// extends Component creates an inheritance to React.Component, and gives component access to React.Component functions
  componentDidMount() {
    // componentDidMount() is invoked immediately after a component is mounted
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