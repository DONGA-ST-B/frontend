import React from "react";
import styled from "styled-components";

export default function Component4() {
  return (
    <WindowBox>
      <Container>eddd</Container>
    </WindowBox>
  );
}

const WindowBox = styled.div`
  background-color: #1aabde;
  display: flex;
  margin: 0;
`;

const Container = styled.div`
  align-items: center;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /* margin: 300px 0 300px 0; */
  /* padding-top: 70px; */
`;
