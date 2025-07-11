import React, { useRef } from 'react';
import { ScrollContext } from 'components/header/layout/HeaderLayoutCp';

const BodyLayoutCp = ({
  children,
  useHeader = false,
  useBottomNavigationBar = false,
  backgroundColor = 'bg-[#FFFFFF]',
}) => {
  // 예시로 헤더 높이 56px, 바텀바 높이 56px 고정 가정
  const scrollRef = useRef();
  const HEADER_HEIGHT = useHeader ? 56 : '1rem';
  const BOTTOM_NAV_HEIGHT = useBottomNavigationBar ? 56 : '1rem';
  const LAYOUT_HEIGHT = useHeader
    ? `calc(100vh - ${HEADER_HEIGHT}px - ${BOTTOM_NAV_HEIGHT}px)`
    : `calc(100vh- ${BOTTOM_NAV_HEIGHT}px)`;

  const _layout_style = `${backgroundColor}`;

  return (
    <>
      <ScrollContext.Provider value={scrollRef}>
        <div ref={scrollRef} className={_layout_style}>
          <div
            className="scroll-hide"
            style={{
              height: LAYOUT_HEIGHT,
              display: 'flex',
              overflowY: 'auto',
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingTop: HEADER_HEIGHT,
              paddingBottom: BOTTOM_NAV_HEIGHT,
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
            }}
          >
            {children}
          </div>
        </div>
      </ScrollContext.Provider>
    </>
  );
};
export default BodyLayoutCp;
