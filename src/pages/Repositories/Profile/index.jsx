import React from "react";
import { MdGroup, MdLocationCity, MdWork, MdLink } from "react-icons/md";

import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles";

function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/62620096?v=4" />
        <Login>testeLogin</Login>
        <Name>Wilson teste name</Name>
      </Header>
      <Inner>
        <Data>
          {" "}
          <MdGroup size={20} />
          30&nbsp; <i>seguidores</i> &middot;&nbsp; 10 <i>&nbsp;seguindo</i>
        </Data>
        <Data>
          {" "}
          <MdWork size={20} />
          WRSG
        </Data>
        <Data>
          {" "}
          <MdLocationCity size={20} /> São Paulo
        </Data>
        <Data>
          {" "}
          <MdLink size={20} />
          &nbsp;
          <a href="https://devsamurai.com.br">devsamurai.com.br</a>
        </Data>
      </Inner>
    </Container>
  );
}

export default Profile;
