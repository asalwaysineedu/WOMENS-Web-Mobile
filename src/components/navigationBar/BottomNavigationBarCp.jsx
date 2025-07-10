import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineHome } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

const BottomNavigationBarCp = ({}) => {
  const MENU_CONFIG = [
    {
      label: '메인',
      path: '/',
      icon: <MdOutlineHome />,
      themeColor: '#000000',
    },
    {
      label: '캘린더',
      path: '/calendar/reservation',
      icon: <FaCalendarAlt />,
      themeColor: '#000000',
    },
    {
      label: '마이페이지',
      path: '/login',
      icon: <FaUserCircle />,
      themeColor: '#000000',
    },
  ];

  const navigate = useNavigate();
  //   const pathname = usePathname();

  const [showNav, setShowNav] = useState(true);
  const [initialHeight, setInitialHeight] = useState(0);

  const containerRef = useRef(null);
  //   const isIOS = useIsIOS();

  //   useEffect(() => {
  //     const handleResize = () => {
  //       const currentHeight = window.innerHeight;
  //       if (!initialHeight) setInitialHeight(currentHeight);

  //       if (initialHeight && currentHeight < initialHeight - 150) {
  //         setShowNav(false);
  //       } else {
  //         setShowNav(true);
  //       }
  //     };

  //     window.addEventListener('resize', handleResize);
  //     handleResize();
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, [initialHeight]);

  if (!showNav) return null;

  return (
    <div className="footerNav border fixed bottom-0 left-0 w-full z-50">
      <nav
        // className={`relative mx-auto max-w-[800px] flex justify-between px-[20px] pt-[10px] ${
        //   isIOS ? "pb-[35px]" : "pb-[10px]"
        // } bg-black`}
        className={`className="fixed bottom-0 left-0 right-0 h-14 border-t bg-white flex justify-around items-center z-50`}
        ref={containerRef}
      >
        {MENU_CONFIG.map((menu, index) => {
          //   const isActive = pathname === menu.path;

          return (
            <div
              key={index}
              onClick={() => navigate(menu.path)}
              className="flex flex-col items-center flex-1 cursor-pointer "
            >
              {/* {isActive && (
                <div
                  layoutId="bottomNavIndicator"
                  className="absolute top-0 w-6 h-[2px] bg-[var(--color-primary)] rounded"
                />
              )} */}
              <div className=""></div>
              {menu.icon}
            </div>
          );
        })}
      </nav>
    </div>
    // <nav className="fixed bottom-0 left-0 right-0 h-14 border-t bg-white flex justify-around items-center z-50">
    //   <button className="text-sm text-gray-600">홈</button>
    //   <button className="text-sm text-gray-600">검색</button>
    //   <button className="text-sm text-gray-600">마이</button>
    // </nav>
  );
};

export default BottomNavigationBarCp;
