import React from 'react';

const BodyLayoutCp = ({
  children,
  useHeader = false,
  useBottomNavigationBar = false,
  backgroundColor = 'bg-[#FFFFFF]',
}) => {
  // 예시로 헤더 높이 56px, 바텀바 높이 56px 고정 가정
  const HEADER_HEIGHT = useHeader ? 48 : '1rem';
  const BOTTOM_NAV_HEIGHT = useBottomNavigationBar ? 48 : 0;
  const LAYOUT_HEIGHT = useHeader
    ? `calc(100vh - ${HEADER_HEIGHT}px - ${BOTTOM_NAV_HEIGHT}px)`
    : `calc(100vh- ${BOTTOM_NAV_HEIGHT}px)`;

  const _layout_style = `${backgroundColor}`;

  return (
    <>
      <div className={_layout_style}>
        {/* 헤더는 position: fixed 또는 absolute로 빼도 되고, 이렇게 해도 됨 */}
        {/* children 영역: 화면 높이에서 header+bottom 네비 높이 뺀 영역 */}
        <div
          style={{
            height: LAYOUT_HEIGHT,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};
export default BodyLayoutCp;
