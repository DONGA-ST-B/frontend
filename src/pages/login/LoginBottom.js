import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { COLORS } from '../../styles/colors';

const LoginBottom = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
      <Typography variant="body2" color={COLORS.GRAY_600}>
        회원가입
      </Typography>
      <Divider orientation="vertical" flexItem style={{ backgroundColor: COLORS.GRAY_300, height: '20px', margin: '0 8px' }} />
      <Typography variant="body2" color={COLORS.GRAY_600}>
        아이디 찾기
      </Typography>
      <Divider orientation="vertical" flexItem style={{ backgroundColor: COLORS.GRAY_300, height: '20px', margin: '0 8px' }} />
      <Typography variant="body2" color={COLORS.GRAY_600}>
        비밀번호 찾기
      </Typography>
    </div>
  );
};

export default LoginBottom;
