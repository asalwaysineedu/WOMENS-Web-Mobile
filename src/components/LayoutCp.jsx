import React from 'react';
import HeaderLayoutCp from './header/layout/HeaderLayoutCp';
import BodyLayoutCp from './body/layout/BodyLayoutCp';
import BottomNavigationBarCp from './navigationBar/BottomNavigationBarCp';

const LayoutCp = ({ children, header = '', useBottomNavigationBar = false }) => {
  return (
    <>
      <div className="">
        {header && <HeaderLayoutCp>{header}</HeaderLayoutCp>}
        <BodyLayoutCp useHeader={header ? true : false} useBottomNavigationBar={useBottomNavigationBar}>
          {children}
        </BodyLayoutCp>
        {useBottomNavigationBar && <BottomNavigationBarCp />}
      </div>
    </>
  );
};
export default LayoutCp;
