import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
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