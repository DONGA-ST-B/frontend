import React from "react";

import { useRef, useCallback, useEffect } from "react";

// 스크롤하면 페이드인 하는 애니메이션
export const useScrollFadeIn = (direction, duration, delay) => {
  // 해당 컴포넌트 가져오기
  const element = useRef();
  // direction 선택
  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)"; // 아래에서 위로 이동
      case "down":
        return "translate3d(0, -100%, 0)"; // 위에서 아래로 이동
      case "left":
        return "translate3d(50%, 0, 0)"; // 오른쪽에서 왼쪽으로 이동
      case "right":
        return "translate3d(-50%, 0, 0)"; // 왼쪽에서 오른쪽으로 이동
      default:
        return "translate3d(0, 0, 0)"; // 기본값 (변경 가능)
    }
  };

  // 설정해둔 컴포넌트를 만날때마다 함수가 재실행되도록 callback하기
  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.tansitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.opacity = 1;
        current.style.tranform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  // intersection-observer로 컴포넌트 위치 observe하기
  useEffect(() => {
    let observer;

    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }

    return () => observer && observer.disconnect();
  }, [onScroll]);

  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};
