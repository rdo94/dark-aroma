//* LIBRARIES
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route, Switch, Redirect } from "react-router-dom";

//* FIREBASE
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

//* PAGES
import LandingPage from "./pages/landingPage/landing.component";
import ShopPage from "./pages/shopPage/shop.component";
import SignInPage from "./pages/signInPage/sign-in-page.component";
import SignUpPage from "./pages/signUpPage/sign-up-page.component";
import CheckoutPage from "./pages/checkoutPage/checkout.component";

//* COMPONENTS
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";

//* ACTIONS
import { setCurrentUser } from "./redux/user/user.actions";

//* SELECTORS
import { selectCurrentUser } from "./redux/user/user.selectors";

//* SCSS
import "./App.scss";

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

      setCurrentUser(userAuth);
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
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/login"
            render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
          />
          <Route
            exact
            path="/register"
            render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
        <Footer />
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
