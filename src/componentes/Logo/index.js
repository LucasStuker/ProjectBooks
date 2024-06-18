import './style.css'
import logo from '../../images/logo.svg'
function Logo() {
    return (
        <div className='logo'>
            <img 
            className='logo-img'
            src={logo} 
            alt='logo'>  
            </img>
            <p><strong>Project</strong>Books</p>
        </div>
     )

}

export default Logo