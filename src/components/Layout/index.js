import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <div className="text">
                <h1>Big test stuff</h1>
                <p>Hi this is a smaller test</p>
                </div>
            </div>
        </div>
    )
}

export default Layout;