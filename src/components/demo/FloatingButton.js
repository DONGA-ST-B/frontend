import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InitialDemo from "./InitialDemo";
import DemoModal from "./DemoModal";

export default function FloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  const toggleDemo = () => {
    setIsOpen(!isOpen);
  };

  const toggleDemoModal = () => {
    setShowDemoModal(!showDemoModal);
  };

  return (
    <>
      {" "}
      <FloatButton onClick={toggleDemo}>
        {" "}
        <ButtonLink to="">demo</ButtonLink>
      </FloatButton>
      {/*성공 코드 밑에*/}
      {isOpen && <InitialDemo show={isOpen} onClick={toggleDemo} />}
      {/* {isOpen ? <InitialDemo onClick={toggleDemo}></InitialDemo> : null} */}
      {/* {isOpen ? (
        // isOpen 상태에 따라 InitialDemo 또는 DemoModal을 렌더링
        showDemoModal ? (
          <DemoModal onClick={toggleDemoModal} />
        ) : (
          <InitialDemo onClick={toggleDemo} />
        )
      ) : null} */}
    </>
  );
}

const FloatButton = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 120px;
  height: 120px;
  background: linear-gradient(#1ec2f4, #1b9cc3);
  border-radius: 100%;
  /* position: sticky;
  bottom: 30px; */
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);

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
