import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="" srcSet="" />
        <nav>
          <NavLink to="/">
            <Timer size={24} />
          </NavLink>

          <NavLink to="/history">
            <Scroll size={24} />
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  )
}
