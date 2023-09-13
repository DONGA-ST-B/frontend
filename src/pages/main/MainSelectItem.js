import React from 'react';
import { COLORS } from '../../styles/colors';

const itemStyle = {
  width: '500px',
  height: '602px',
  borderRadius: '30px',
  border: `1px solid ${COLORS.GRAY_700}`,
  marginTop: '60px',
  marginLeft: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '40px',
  boxSizing: 'border-box',
};

const style1 = {
  background: COLORS.F4F8FD,
  marginBottom: '60px',
  fontSize: '36px',
  fontWeight: 'bold',
  color: COLORS.GRAY_900,
  textAlign: 'left',
};

const style2 = {
  background: COLORS.GRAY_200,
  marginBottom: '120px',
};

const titleStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  color: COLORS.GRAY_900,
};

const contentStyle = {
  fontSize: '24px',
  color: COLORS.GRAY_700,
};

const MainSelectItem = ({ why, content, title }) => {
  return (
    <div style={{ ...itemStyle, ...(why ? style1 : style2) }}>
      {why ? (
        <>
          <div>왜 하이카디를</div>
          <div>선택해야 하나요?</div>
        </>
      ) : (
        <>
          <div style={titleStyle}>{title}</div>
          <div style={contentStyle}>{content}</div>
        </>
      )}
    </div>
  );
};

export default MainSelectItem;
