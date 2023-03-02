import { HeaderContainer } from './styles'
import { Timer, Scroll } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="" srcSet="" />
        <nav>
          <a href="/">
            <Timer />
          </a>

          <a href="#">
            <Scroll />
          </a>
        </nav>
      </HeaderContainer>
    </>
  )
}
