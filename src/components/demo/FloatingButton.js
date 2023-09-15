import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FloatingButton() {
  return (
    <FloatButton>
      {" "}
      <ButtonLink to="">demo</ButtonLink>
    </FloatButton>
  );
}

const FloatButton = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 120px;
  background: linear-gradient(#1ec2f4, #1b9cc3);
  border-radius: 100%;
  /* position: sticky;
  bottom: 30px; */

  //
  position: fixed; /* 변경된 부분: sticky에서 fixed로 변경 */
  bottom: 30px;
  right: 30px; /* 추가된 부분: 오른쪽 하단으로 이동 */
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: var(--system-white, #fff);

  /* H1_B */
  font-family: Pretendard;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 44.8px */
`;
