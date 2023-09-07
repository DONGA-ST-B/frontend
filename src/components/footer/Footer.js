import React, { Component } from "react";
import LogoWhite from "../../assets/Logo_White.png"
import "./Footer.css";
import { COLORS } from "../../styles/colors";

// Footer에서 표시할 정보를 정의한 데이터 객체
const footerData = {
  registrationNumber: "204-86-40122",
  companyName: "동아에스티(주)",
  representativeName: "김민영",
  phoneNumber: "02-920-8406",
  address: "서울특별시 동대문구 천호대로 64",
  salesRegistrationNumber: "제2022-서울동대문-1374호",
  deviceSalesNumber: "제 2003-3050034-00003 호",
  copyright: "Copyright © 2022 DongA ST Inc. All Rights Reserved.",
  hosting: "Hosting by cafe24",
};

// Footer의 각 정보를 표시하는 컴포넌트
const FooterInfo = ({ label, value }) => (
  <span>
    {label} <em> | </em> {value}
    <br />
  </span>
);

class Footer extends Component {
  render() {
    const footerStyle = {
      backgroundColor: COLORS.GRAY_FOOTER_BG, // 배경 색상 설정
      color: COLORS.GRAY_500, // 글자 색상 설정
      padding: "20px", // 패딩 값 설정
    };

    const logoStyle = {
      marginBottom: "54px",
    };

    const infoStyle = {
      marginBottom: "32px",
    };

    const spacingStyle = {
      marginBottom: "16px", // 추가한 여백 설정
    };

    return (
      <div style={footerStyle} className="footer-container">
        <img src={LogoWhite} alt="로고" style={logoStyle} /> {/* 여백 적용 */}
        <br />
        <div style={infoStyle}>
        <FooterInfo label="사업자등록번호" value={footerData.registrationNumber} />
        <div style={spacingStyle}></div>
        <FooterInfo label="상호" value={footerData.companyName} />
        <div style={spacingStyle}></div>
        <FooterInfo label="대표자명" value={footerData.representativeName} />
        <div style={spacingStyle}></div>
        <FooterInfo label="전화번호" value={<a href={footerData.email}>{footerData.phoneNumber}</a>} />
        <div style={spacingStyle}></div>
        <FooterInfo label="주소" value={footerData.address} />
        <div style={spacingStyle}></div>
        <FooterInfo label="통신판매업신고번호" value={footerData.salesRegistrationNumber} />
        <div style={spacingStyle}></div>
        <FooterInfo label="의료기기판매업번호" value={footerData.deviceSalesNumber} />
        </div>
        <div style={spacingStyle}></div>
        <span className="copyright" style={{ color: COLORS.GRAY_500 }}>{footerData.copyright}</span>
        <div style={spacingStyle}></div>
        <FooterInfo label="Hosting by" value={footerData.hosting} />
      </div>
    );
  }
}

export default Footer;
