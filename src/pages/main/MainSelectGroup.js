import React from 'react';
import MainSelectItem from './MainSelectItem';

const MainSelectGroup = () => {
  return (
    <div>
      <MainSelectItem
        why={true} // 스타일 1번 적용
      />
      <MainSelectItem
        why={false} // 스타일 2번 적용
        title="이 아이템의 제목"
        content="이 아이템의 내용입니다."
      />
    </div>
  );
};

export default MainSelectGroup;
