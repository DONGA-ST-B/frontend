import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Component5() {
  const card_data = [
    {
      publisher: "MTN 1",
      title: "helloworld",
      descript: "adlifjaejiflajd;faijeflaijdfiajdifjsdjf",
    },
    {
      publisher: "MTN 2",
      title: "helloworld",
      descript: "adlifjaejiflajd;faijeflaijdfiajdifjsdjf",
    },
    {
      publisher: "MTN 3",
      title: "helloworld",
      descript: "adlifjaejiflajd;faijeflaijdfiajdifjsdjf",
    },
    {
      publisher: "MTN 4",
      title: "helloworld",
      descript: "adlifjaejiflajd;faijeflaijdfiajdifjsdjf",
    },
    {
      publisher: "MTN 5",
      title: "helloworld",
      descript: "adlifjaejiflajd;faijeflaijdfiajdifjsdjf",
    },
    {
      publisher: "MTN 6",
      title: "helloworld",
      descript: "adlifjaejiflajd;faijeflaijdfiajdifjsdjf",
    },
  ];

  // const [animate, setAnimate] = useState(true);

  // const onStop = () => {
  //   setAnimate(false);
  // };

  // const onRun = () => {
  //   setAnimate(true);
  // };

  return (
    <WindowBox>
      <Container>
        <TextBox>
          <FirstText>하이카디 활용 사례</FirstText>
          <SecondText>
            하이카디의 활용 사례가 궁금하시다면? 하이카디의 최신 소식들을
            확인해보세요.
          </SecondText>
        </TextBox>

        <CardContainer>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            slidesPerGroup={3}
            observe={true}
            observerParents={true}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            // breakpoints={{
            //   1280: {
            //     slidesPerView: 3,
            //     slidesPerGroup: 3,
            //   },
            //   720: {
            //     slidesPerView: 1,
            //     slidesPerGroup: 1,
            //   },
            // }}
          >
            {card_data.map((item, index) => (
              <SwiperSlide>
                {" "}
                <CardBox>
                  <div>{item.publisher}</div>
                  <div>{item.title}</div>
                  <div>{item.descript}</div>
                </CardBox>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContainer>
      </Container>
    </WindowBox>
  );
}
const WindowBox = styled.div`
  /* background-color: #1aabde; */
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

const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  /* border: 1px solid red; */
  margin-bottom: 100px;
`;

const FirstText = styled.div`
  color: var(--gray-900, #15191d);
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 76.8px */
`;

const SecondText = styled.div`
  color: var(--gray-600, #666b6f);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 51.2px */
`;

const CardContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;

  justify-content: center;
  align-items: center;
  width: 90%;
  height: 65%;
  /*slider*/
  overflow: visible;
`;

const CardBox = styled.div`
  /* width: 300px; */
  height: 440px;
  border-radius: 30px;
  border: 1px solid var(--gray-200, #e3e7ed);
  background: var(--system-white, #fff);
  box-shadow: 10px 20px 20px 0px rgba(0, 0, 0, 0.15);
  padding: 40px;
  overflow: hidden;

  transition: transform 0.3s ease; /* transform 속성에 애니메이션 효과 추가 */

  &:hover {
    transform: translateY(-48px); /* hover 시에 위로 10px 이동 */
  }
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 24x;
  margin-right: 24px;
`;
