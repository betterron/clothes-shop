import './App.css';
import HomePage from './pages/homepage/Homepage';
import { Switch, Route, Redirect } from "react-router-dom";
import Shop from './pages/homepage/shop/Shop';
import Header from './components/header/Header';
import SigninSignUp from './pages/signin-signup-page/SigninSignUp';
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Component } from 'react';
import { connect } from "react-redux";
import { setCurrentUser } from './redux/user/user.action';
import CheckOut from './pages/checkout/CheckOut';


class App extends Component {
  unsubscribeFromAuth = null;

  // console.log(this.props.currentUser);

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        setCurrentUser({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={CheckOut} />
          <Route exact path='/signin' render={() => (
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
                <SigninSignUp />
              )
          )
          } />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = ({ userReducer }) => ({
  currentUser: userReducer.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);