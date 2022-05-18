import React from 'react'
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { auth ,createUserProfileDocument} from './firebase/firebase.utils';
import Homepage from './pages/Homepage/Homepage.components'
import ShopPage from './pages/shop/shopage.component'
import './App.css'
import firebase from './firebase/firebase.utils'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
//  function App() {
//   const [curruser, setUser] =useState(null);
//   const [unsubscribefromAuth, setUnsubscribeFromAuth] = useState(null);
//    useEffect(()=>{
//     setUnsubscribeFromAuth( auth.onAuthStateChanged(user => {
//     setUser(user);
//     console.log(user);
//    }))
//     return function cleanup() {
//       setUnsubscribeFromAuth(null);
//     }
  
// },[]);
   
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
    return (
      <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} /> 
          
             
          <Route path="/signin" 
            element={this.props.currentUser ? (<Navigate to='/' />):(<SignInAndSignUpPage/>)} />
  
        </Routes>
      </div>
      </Router>
    )
  
}
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);




// useEffect(() => {
//   function handleStatusChange(status) {
//     setIsOnline(status.isOnline);
//   }
//   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//   // Specify how to clean up after this effect:
//   return function cleanup() {
//     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//   };
// });