import React from 'react';
import { COLORS } from '../../styles/colors';

const containerStyle = {
  width: '400px',
  height: '605px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
};

const imageStyle = {
  width: '400px',
  height: '400px',
  borderRadius: '20px',
  marginBottom: '48px',
};

const titleStyle = {
  color: COLORS.GRAY_900,
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '24px',
};

const contentStyle = {
  color: COLORS.GRAY_600,
  fontSize: '16px',
};

const MainAboutItem = ({ image, title, content }) => {
  return (
    <div style={containerStyle}>
      <img src={image} alt="Item" style={imageStyle} />
      <h1 style={titleStyle}>{title}</h1>
      <p style={contentStyle}>{content}</p>
    </div>
  );
};

export default MainAboutItem;
