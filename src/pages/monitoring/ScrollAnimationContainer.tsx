// import styled, { keyframes } from "styled-components";
// // import React from "react";
// import { UseScrollAnimation } from "./UseScroll.ts";

// type PropsType = {
//   children: React.ReactNode;
// };

// export const ScrollAnimationContainer = ({ children }: PropsType) => {
//   const { ref, isInViewport } = UseScrollAnimation();
//   return (
//     <Container ref={ref} className={isInViewport ? "frame-in" : ""}>
//       {children}
//     </Container>
//   );
// };
// const frameInAnimation = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(-30%);
//   }

//   100%{
//     opacity: 1;
//     transform: translateY(0%);
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   /* flex-direction: column; */
//   /* justify-content: center; */
//   align-items: center;
//   width: 100%;
//   height: 100vh;

//   &.frame-in {
//     animation: ${frameInAnimation} 2s forwards;
//   }
// `;
