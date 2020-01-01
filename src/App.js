// LIBRARIES
import React from "react";
import { connect } from "react-redux";
import { Link, Route, Switch, Redirect } from "react-router-dom";

// PAGES
import LandingPage from './pages/landingPage/landing.component';

// COMPONENTS
import Header from './components/header/header.component';

// CSS/SASS
import "./sass/App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
