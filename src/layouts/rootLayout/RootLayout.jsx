import { Link, Outlet } from 'react-router-dom';
import './rootLayout.css';
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

const RootLayout = ()=> {
    return(
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <div className='rootlayout'>
        <header>
            <Link to="/" className='logo'>
            <img src='/logo.png' alt=' 404 ERROR' />
            <span>NIKOBOT AI</span>

            </Link>
            <div className='user'>
                 <SignedOut>
                    <SignInButton />
                </SignedOut> 
                 {/*rightnow we dont need this button thats why this button is in comment*/ }
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>
        <header>
            <main>
                <Outlet />
            </main>
        </header>  
       </div> 
       </ClerkProvider>
    );
}
export default RootLayout;










