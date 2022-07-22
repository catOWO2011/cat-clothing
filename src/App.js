import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log(this.currentUser, 'currentUser');
    this.unsubscribeFromAuth = onAuthStateChanged(getAuth(), (user) => {
      this.setState({ currentUser: user });
      console.log(user, '...');
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log('removed');
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/signin' element={<SignInAndSignUpPage/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
