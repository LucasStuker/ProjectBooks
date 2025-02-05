import Logo from '../Logo'
import IconesHeader from '../iconesHeader'
import OpcoesHeader from '../OpcoesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header `
    background-color: #FFF;
    display: flex;
    justify-content: center;
  
  
`
function Header () {
    return (
    <HeaderContainer>
      <Logo />
      <IconesHeader />
      <OpcoesHeader /> 
    </HeaderContainer>

     
    )
}

export default Header