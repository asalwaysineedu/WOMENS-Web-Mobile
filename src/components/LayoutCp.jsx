import React from 'react';
import HeaderLayoutCp from './header/layout/HeaderLayoutCp';
import BodyLayoutCp from './body/layout/BodyLayoutCp';
import BottomNavigationBarCp from './navigationBar/BottomNavigationBarCp';

const LayoutCp = ({ children, header = '', bottomNav = '' }) => {
  return (
    <>
      {header && <HeaderLayoutCp>{header}</HeaderLayoutCp>}
      <BodyLayoutCp useHeader={header ? true : false} useBottomNavigationBar={bottomNav ? true : false}>
        {children}
      </BodyLayoutCp>
      {bottomNav && <BottomNavigationBarCp>{bottomNav}</BottomNavigationBarCp>}
    </>
  );
};
export default LayoutCp;
