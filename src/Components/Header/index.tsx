import { Container, Avatar, Content } from "./styles";
import logo from '../../assets/logo.png';



export const Header = (props: any) => (
  <Container>
    <header>
      <h1>
        Pedidos Milú
      </h1>
    </header>
    <Content>
      <Avatar>
        <img
          src={logo}
          alt="Geladim Milú Logo"
        />
      </Avatar>
    </Content>
  </Container>
);