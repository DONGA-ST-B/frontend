import React, { Component } from "react";

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
    return (
      <div>
        <FooterInfo label="사업자등록번호" value={footerData.registrationNumber} />
        <FooterInfo label="상호" value={footerData.companyName} />
        <FooterInfo label="대표자명" value={footerData.representativeName} />
        <FooterInfo label="전화번호" value={<a href={footerData.email}>{footerData.phoneNumber}</a>} />
        <FooterInfo label="주소" value={footerData.address} />
        <FooterInfo label="통신판매업신고번호" value={footerData.salesRegistrationNumber} />
        <FooterInfo label="의료기기판매업번호" value={footerData.deviceSalesNumber} />
        <span className="copyright">{footerData.copyright}</span>
        <FooterInfo label="Hosting by" value={footerData.hosting} />
      </div>
    );
  }
}

export default Footer;
