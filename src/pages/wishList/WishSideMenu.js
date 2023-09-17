import React from 'react';
import styled from 'styled-components';
import { COLORS } from "../../styles/colors";


// 스타일 정의
const MenuContainer = styled.div`
  color: GRAY_900;
  font-size: H3;
  font-weight: bold;
  padding-bottom: 32px;
`;

const SubMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubMenuItem = styled.div`
  color: ;
  font-size: 16px;
  margin-bottom: 16px;
`;

const MenuSeparator = styled.div`
  height: 72px;
`;

// WishSideMenu 컴포넌트 정의
function WishSideMenu() {
    return (
        <div>

            <MenuContainer>쇼핑 정보</MenuContainer>
            <SubMenuItem>위시리스트</SubMenuItem>
            <SubMenuItem>장바구니</SubMenuItem>
            <SubMenuItem>주문내역 조회</SubMenuItem>
            <SubMenuItem>취소/교환/반품 조회</SubMenuItem>
            <MenuSeparator />
            <MenuContainer>나의 정보</MenuContainer>
            <SubMenuItem>주문내역 조회</SubMenuItem>
            <SubMenuItem>취소/교환/반품 조회</SubMenuItem>

        </div>
    );
}

export default WishSideMenu;
