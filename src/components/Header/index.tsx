import logoImg from '../../assets/logo.svg'
import { Container, Wrapper } from './styles'

export function Header() {
  return (
   <Container>
     <Wrapper>
       <img src={logoImg} alt="dt money"/>
       <button type="button">
         Nova transação
       </button>
     </Wrapper>
   </Container>
  )
}