import React from 'react'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { auth ,createUserProfileDocument} from './firebase/firebase.utils';
import Homepage from './pages/Homepage/Homepage.components'
import ShopPage from './pages/shop/shopage.component'
import './App.css'
import firebase from './firebase/firebase.utils'
import Header from './components/header/header.component';
import SignIn from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
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
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id:snapShot.id,
            ...snapShot.data()
          }
        },
        () => {
          console.log(this.state)});
      });
        
    }
    else{
      this.setState({
        currentUser: null
      });
    }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

   render() {

  return (
    <Router>
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} /> 
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
    </Router>
  )
}
}

export default App;




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