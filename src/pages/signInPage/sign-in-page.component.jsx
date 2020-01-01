import React from "react";
import { Link } from 'react-router-dom';

import SignIn from '../../components/sign-in/sign-in.component';

// SASS for SignIn page and the SignUp box
import '../../sass/pages/sign-in.styles.scss';

const SignInSignUpPage = () => (
    <div className='sign-in'>
        <SignIn />
        <div className='sign-up'>
            <h2>Don't have an account?</h2>
            <a href='#'>Sign Up</a>
        </div>
    </div>
);

export default SignInSignUpPage;
