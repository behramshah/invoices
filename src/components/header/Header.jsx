import './header.css';
import {ReactComponent as Cabinet} from '../../assets/Cabinet.svg';
import {ReactComponent as Vector} from '../../assets/Vector.svg';
import {ReactComponent as Ellipse22} from '../../assets/Ellipse22.svg';

const Header = () => {
    return (
        <div className='Header'>
            <Cabinet/>
            <Vector/>
            <Ellipse22/>
        </div>
    )
}

export default Header;