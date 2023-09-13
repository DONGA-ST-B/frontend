import React from 'react';
import MainSelectItem from './MainSelectItem';
import Logo from '../../assets/hicardi_logo.png'
import Select1 from '../../assets/Select1.png';
import Select2 from '../../assets/Select2.png';
import Select3 from '../../assets/Select3.png';
import Select4 from '../../assets/Select4.png';
import Select5 from '../../assets/Select5.png';

const MainSelectGroup = () => {
  return (
    <div>
      {/* 첫 번째 MainSelectItem: 스타일 1번 (why) */}
      <MainSelectItem
        why={true}
        image={Logo}
      />

      {/* 두 번째 MainSelectItem: 스타일 2번 (content) */}
      <MainSelectItem
        why={false}
        image={Select2} // 이미지 리소스 경로 설정
        title="이 아이템의 제목"
        content="이 아이템의 내용입니다."
      />
    </div>
  );
};

export default MainSelectGroup;
