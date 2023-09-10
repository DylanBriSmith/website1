import './index.scss';
import { Link, NavLink} from 'react-router-dom';
//In development, maybe link to dev page, on dev page have link to customer page etc

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <p>
                This is a Sidebar
            </p>
            <nav>
            <NavLink exact="true" activeclassname="active" to="/">
        
                </NavLink>

            </nav>
        </div>
    )
  

};

export default Sidebar;