import React from "react";

import { Container } from "./styles";

const Menu: React.FC = () => {
  return (
    <Container>
      <h3>Tutorial de temas com React</h3>
      <Switch 
        onChange={() => {
            // TODO: implementar a troca de tema
        }}
        checked={false} // valor estático por enquanto
      />
    </Container>
  );
}

export default Menu;