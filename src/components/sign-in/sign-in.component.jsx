
import { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-buttom/custom-buttom.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type="email"
            value={email}
            onChange={this.handleChange}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            onChange={this.handleChange}
            label='password'
            required
          />
        <div className='buttons'>
          <CustomButtom type='submit'>
            Sign in
          </CustomButtom>
          <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with google
          </CustomButtom>
        </div>
        </form>
      </div>
    );
  }
}

export default SignIn;