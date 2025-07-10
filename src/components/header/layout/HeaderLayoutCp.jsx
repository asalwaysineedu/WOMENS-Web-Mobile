import React from 'react';

const HeaderLayoutCp = ({ children }) => {
  const FONT_SIZE = '1.5rem';
  const HEADER_LAYOUT_STYLE = `flex items-center justify-between grid-cols-${children?.length}`;

  return (
    <>
      <header>
        <div
          className={HEADER_LAYOUT_STYLE}
          style={{
            height: 48,
            top: 0,
            left: 0,
            right: 0,
            paddingTop: '1rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            fontSize: FONT_SIZE,
          }}
        >
          {children}
        </div>
      </header>
    </>
  );
};

export default HeaderLayoutCp;
