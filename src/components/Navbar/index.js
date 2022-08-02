import React from "react";
import { Header, Container, Title } from "./styles";
import { Link } from "react-router-dom";

const Navbar = () =>{
  return(
    <Header>
      <Container>
          <Link to={'/'}>
            <Title>Workout Buddy</Title>
          </Link>
      </Container>
    </Header>
  )
}
export default Navbar