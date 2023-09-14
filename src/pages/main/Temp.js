import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

export default function Temp() {
  const [data, setData] = useState([]);
  const [articleData, setArticleData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://www.kusitms28.shop/api/article/all`
        );
        console.log("성공", res.data.message);
        setData(res.data);

        const apiData = res.data.data;
        const extractedData = apiData.map((item) => ({
          publisher: item.newspaperName,
          title: item.articleTitle,
          descript: item.articleContent,
          img: item.photoUrl,
          link: item.articleLink,
        }));
        setArticleData(extractedData);
        console.log("articleData:", articleData);
      } catch (err) {
        console.error("error:", err);
      }
    };
    getData();
  }, []);

  const handleCardClick = (link) => {
    if (link) {
      window.location.href = link;
    }
  };

  // 스크롤 애니메이션 클래스 추가 및 제거
  const handleScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight) {
        element.classList.add("animate");
      } else {
        element.classList.remove("animate");
      }
    });
  };

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <WindowBox>
      <Container>
        <TextBox>
          <FirstText className="animate-on-scroll">
            하이카디 활용 사례
          </FirstText>
          <SecondText className="animate-on-scroll">
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
          >
            {articleData.map((item, index) => (
              <SwiperSlide key={index}>
                <CardBox
                  className={`animate-on-scroll ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                  onClick={() => handleCardClick(item.link)}
                >
                  <ArticleImg>
                    <StyledImg src={item.img} alt="" />
                  </ArticleImg>
                  <ArticleTextBox>
                    <PublisherText>{item.publisher}</PublisherText>
                    <TitleText>{item.title}</TitleText>
                    <DescriptText>{item.descript}</DescriptText>
                  </ArticleTextBox>
                </CardBox>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardContainer>
      </Container>
    </WindowBox>
  );
}

// ... 이하 스타일 및 컴포넌트 정의

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
  height: 500px;
  border-radius: 30px;
  border: 1px solid var(--gray-200, #e3e7ed);
  background: var(--system-white, #fff);
  box-shadow: 10px 20px 20px 0px rgba(0, 0, 0, 0.15);
  /* padding: 40px; */
  overflow: hidden;

  transition: transform 0.3s ease; /* transform 속성에 애니메이션 효과 추가 */

  &:hover {
    transform: translateY(-48px); /* hover 시에 위로 10px 이동 */
    cursor: pointer;
  }
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 24x;
  margin-right: 24px;
`;

const ArticleImg = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  /* width: 100%; */
  height: 50%;
  border-bottom: 1px solid #d3d3d3;
`;

const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ArticleTextBox = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  text-align: left;
  margin: 20px;

  height: 42%;
  /* margin-bottom: 1px; */
`;

const PublisherText = styled.div`
  color: var(--blue, #18afdd);

  /* H2_B */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 38.4px */
`;

const TitleText = styled.div`
  color: var(--gray-900, #15191d);

  /* H1_B */
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 44.8px */
`;

const DescriptText = styled.div`
  color: var(--gray-600, #666b6f);

  /* H3 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 32px */
  /* border: 1px solid black; */

  white-space: normal;
  overflow-wrap: break-word;
  overflow: hidden;
`;
