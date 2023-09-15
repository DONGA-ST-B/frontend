import React, { Children, useState } from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";

const DemoModal = () => {
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const [thirdCheck, setThirdCheck] = useState(false);

  return (
    <ModalContainer>
      <TextBox>
        <TitleText>데모 신청하기</TitleText>
        <CheckBoxContainer>
          <label>
            <PerCheck>
              {" "}
              <CheckText>HiCardi</CheckText>
              <CheckBox
                checked={firstCheck}
                onChange={setFirstCheck}
              ></CheckBox>
            </PerCheck>{" "}
          </label>
          <label>
            <PerCheck>
              <CheckText>HiCardi+</CheckText>
              <CheckBox
                checked={secondCheck}
                onChange={setSecondCheck}
              ></CheckBox>{" "}
            </PerCheck>
          </label>
          <label>
            <PerCheck>
              {" "}
              <CheckText>HiCardi+ H100</CheckText>
              <CheckBox
                checked={thirdCheck}
                onChange={setThirdCheck}
              ></CheckBox>{" "}
            </PerCheck>
          </label>
        </CheckBoxContainer>
        <InputBox>
          <PerBox>
            <InputTitle>이름</InputTitle>
            <StyledInput
              type="text"
              name="name"
              placeholder="이름을 입력해주세요."
            />
          </PerBox>{" "}
          <PerBox>
            <InputTitle>소속</InputTitle>
            <StyledInput
              type="text"
              name="name"
              placeholder="소속 회사 또는 병원명을 입력해 주세요."
            />
          </PerBox>{" "}
          <PerBox>
            <InputTitle>이메일</InputTitle>
            <StyledInput
              type="text"
              name="name"
              placeholder="이메일을 입력해주세요."
            />
          </PerBox>{" "}
          <PerBox>
            <InputTitle>연락처</InputTitle>
            <StyledInput
              type="text"
              name="name"
              placeholder="연락처를 입력해주세요."
            />
          </PerBox>
          <ApplyButton disabled={!firstCheck || !secondCheck || !thirdCheck}>
            신청하기
          </ApplyButton>
        </InputBox>
      </TextBox>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 440px;
  height: 740px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 44px 40px;
`;

const TitleText = styled.div`
  color: var(--gray-900, #15191d);

  /* H2_B */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 38.4px */
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  /* border: 1px solid red; */
`;

const PerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  /* border: 1px solid red; */
`;

const StyledInput = styled.input`
  width: 360px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 50px;
  background: var(--gray-50, #f4f8fd);

  padding: 0px 15px;
  border: none;
  outline: none;

  &::placeholder {
    color: var(--gray-500, #8e9398);
    outline: none;

    /* B2 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
    letter-spacing: 0.064px;
  }
`;

const InputTitle = styled.div`
  color: var(--gray-900, #15191d);

  /* B2 b */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.064px;
  /* border: 1px solid blue; */
`;

const ApplyButton = styled.button`
  border-radius: 50px;
  background: var(--blue, #18afdd);
  width: 100%;
  height: 60px;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  //
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  color: var(--system-white, #fff);

  /* B2 b */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.064px;

  margin-top: 48px;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  /* border: 1px solid red; */
  width: 100%;
`;
const CheckText = styled.div`
  color: var(--gray-900, #15191d);

  /* B2 b */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.064px;
`;

const PerCheck = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default DemoModal;
