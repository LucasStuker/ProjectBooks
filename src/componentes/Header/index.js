import './style.css'
import Logo from '../Logo'
import IconesHeader from '../iconesHeader'
import OpcoesHeader from '../OpcoesHeader'

function Header () {
    return (
    <header className='App-header'>
      <Logo />
      <IconesHeader />
       <OpcoesHeader /> 
     </header>
    )
}

export default Header