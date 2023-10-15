import { Container } from "./styles"
import { Link } from "react-router-dom";

interface IHeaderProps {
  itemsAdd?: any;
}

export function Header({itemsAdd}: IHeaderProps) {
  return (
    <Container>
      <Link to="/">
        <h1>web.store</h1>
      </Link>

      <div>
        <span>Cart: {itemsAdd}</span>
        <Link to="/cart">
          <button>Ir para o carrinho</button>
        </Link>
      </div>
    </Container>
  )
}