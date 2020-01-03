// LIBRARIES
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route, Switch, Redirect } from "react-router-dom";

// PAGES
import LandingPage from "./pages/landingPage/landing.component";
import MenuPage from "./pages/menuPage/menu.component";
import ShopPage from "./pages/shopPage/shop.component";
import SignInPage from "./pages/signInPage/sign-in-page.component";
import SignUpPage from "./pages/signUpPage/sign-up-page.component";

// COMPONENTS
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// ACTIONS
import { setCurrentUser } from "./redux/user/user.actions";

// SELECTORS
import { selectCurrentUser } from "./redux/user/user.selectors";

// CSS
import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/menu" component={MenuPage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/login"
            render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
          />
          <Route
            path="/register"
            render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
