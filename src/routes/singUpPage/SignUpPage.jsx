
import { SignUp } from '@clerk/clerk-react';
import './SignUpPage.css'

const SignUpPage=()=> {
    return(
        <>
        <div className='singUpPage'> 
        <SignUp path="/sign-up"/></div>
        </>
    )
}
export default SignUpPage;
