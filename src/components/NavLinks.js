import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import UserPage from '../pages/UserPage';
import ContactPage from '../pages/ContactPage';

function NavLinks() {
  return (
    <Router>
        <Routes>
            <Route path="/userPage"> 
                <UserPage/>
            </Route>
        </Routes>
    </Router>
  );
}

export default NavLinks;