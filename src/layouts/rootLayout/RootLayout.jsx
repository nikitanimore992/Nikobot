import { Link, Outlet } from 'react-router-dom';
import './rootLayout.css';

const RootLayout = ()=> {
    return(
        <>
        <div className='rootlayout'>
        <header>
            <Link to="/">
            <img src='/nikobot.png' alt=' 404 ERROR' />
            <span>NIKOBOT AI</span>

            </Link>
        </header>
        <header>
            <main>
                <Outlet />
            </main>
        </header>
       
       </div>

        </>
    )
}
export default RootLayout;
