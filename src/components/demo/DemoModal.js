import React, { Children, useState } from "react";
import styled from "styled-components";
import CheckBox from "./CheckBox";
import { Close } from "@mui/icons-material";
import CompleteDemo from "./CompleteDemo";
import axios from "axios";

const DemoModal = (props) => {
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const [thirdCheck, setThirdCheck] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDemo = () => {
    setIsOpen(!isOpen);
  };

  //다음 모달 오픈 관련
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);

  const openModal = () => {
    setIsCompleteModalOpen(true);
  };

  const closeModal = () => {
    setIsCompleteModalOpen(false);
  };

  const handleModal = () => {
    setIsCompleteModalOpen(!isCompleteModalOpen);
  };

  //신청폼 관련 상태 정리
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [depart, setDepart] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  //input field 상태 관리
  const [isNameEmpty, setIsNameEmpty] = useState(true);
  const [isDepartEmpty, setIsDepartEmpty] = useState(true);
  const [isEmailEmpty, setIsEmailEmpty] = useState(true);
  const [isContactEmpty, setIsContactEmpty] = useState(true);

  const [isRegister, setIsRegister] = useState(false);

  const registerDemo = () => {
    //체크박스 type 설정
    let selectedType = "";
    if (firstCheck) {
      selectedType = "Hicardi";
    } else if (secondCheck) {
      selectedType = "Hicardi+";
    } else if (thirdCheck) {
      selectedType = "Hicardi+ H100";
    }

    axios
      .post("https://www.kusitms28.shop/api/demo", {
        type: selectedType,
        name: name,
        department: depart,
        email: email,
        contact: contact,
      })
      .then((res) => {
        console.log("res.data:", res.data.message);
        console.log("신청 완료");
        alert(res.data.message);
        if (res.data.isSuccess == true) {
          setIsRegister(true);
        }
        if (isRegister) {
          setIsCompleteModalOpen(true);
        }
        console.log(selectedType);
      })
      .catch((err) => {
        console.log("err:", err);
        alert("모든 입력 필드를 채워주세요.");
      });

    //모든 입력 필드가 비어있는지 여부를 검사
    // const allFieldsNotEmpty =
    //   !isNameEmpty && !isDepartEmpty && !isEmailEmpty && !isContactEmpty;

    // if (res.data.isSuccess === true && allFieldsNotEmpty) {
    //   setIsRegister(true);
    // }
  };

  return (
    <>
      {" "}
      <ModalContainer show={props.show}>
        <ExitIcon onClick={props.onClick}>
          <Close />
        </ExitIcon>
        <TextBox>
          <TitleText>데모 신청하기</TitleText>
          <CheckBoxContainer>
            <label>
              <PerCheck>
                {" "}
                <CheckText>HiCardi</CheckText>
                <CheckBox
                  checked={firstCheck}
                  onChange={() => setFirstCheck(!firstCheck)}
                ></CheckBox>
              </PerCheck>{" "}
            </label>
            <label>
              <PerCheck>
                <CheckText>HiCardi+</CheckText>
                <CheckBox
                  checked={secondCheck}
                  onChange={() => setSecondCheck(!secondCheck)}
                ></CheckBox>{" "}
              </PerCheck>
            </label>
            <label>
              <PerCheck>
                {" "}
                <CheckText>HiCardi+ H100</CheckText>
                <CheckBox
                  checked={thirdCheck}
                  onChange={() => setThirdCheck(!thirdCheck)}
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
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setIsNameEmpty(e.target.value === "");
                }}
              />
            </PerBox>{" "}
            <PerBox>
              <InputTitle>소속</InputTitle>
              <StyledInput
                type="text"
                name="name"
                placeholder="소속 회사 또는 병원명을 입력해 주세요."
                value={depart}
                onChange={(e) => {
                  setDepart(e.target.value);
                  setIsDepartEmpty(e.target.value === "");
                }}
              />
            </PerBox>{" "}
            <PerBox>
              <InputTitle>이메일</InputTitle>
              <StyledInput
                type="text"
                name="name"
                placeholder="이메일을 입력해주세요."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsEmailEmpty(e.target.value === "");
                }}
              />
            </PerBox>{" "}
            <PerBox>
              <InputTitle>연락처</InputTitle>
              <StyledInput
                type="text"
                name="name"
                placeholder="연락처를 입력해주세요."
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                  setIsContactEmpty(e.target.value === "");
                }}
              />
            </PerBox>
            <ApplyButton
              onClick={() => {
                console.log("신청하기 버튼 클릭됨");
                registerDemo();

                if (isRegister) {
                  setIsCompleteModalOpen(true);
                }

                // if (
                //   !isNameEmpty &&
                //   !isDepartEmpty &&
                //   !isEmailEmpty &&
                //   !isContactEmpty
                // ) {
                //   console.log("신청하기 버튼 클릭됨");
                //   registerDemo();
                // } else {
                //   alert("모든 필드를 작성해주세요.");
                //   console.log("모든 필드를 작성해주세요.");
                // }

                // if (isRegister) {
                //   console.log("isRegister이 true임");
                // }
              }}
            >
              신청하기
            </ApplyButton>
          </InputBox>
        </TextBox>
      </ModalContainer>
      {isRegister && (
        <CompleteDemo
          show={isCompleteModalOpen}
          onClick={handleModal}
          onClose={closeModal}
        />
      )}
    </>
  );
};
const ExitIcon = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  right: 18px;
  top: 20px;
  cursor: pointer;
`;

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
  margin-bottom: 4px;
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
