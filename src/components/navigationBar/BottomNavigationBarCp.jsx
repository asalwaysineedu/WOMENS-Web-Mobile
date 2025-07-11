import React from 'react';
// import { AiFillHome } from 'react-icons/ai';
// import { FaUserAlt, FaCalendarAlt } from 'react-icons/fa';

const BottomNavigationBarCp = () => {
  // const MENU_CONFIG = [
  //   { label: '메인', path: '/', icon: <AiFillHome /> },
  //   { label: '캘린더', path: '/calendar/reservation', icon: <FaCalendarAlt /> },
  //   { label: '마이페이지', path: '/login', icon: <FaUserAlt /> },
  // ];

  return (
    <div className="fixed bottom-0 left-0 w-full h-[56px] bg-white border border-[#E7EBEE] rounded-t-2xl">
      <nav className={`relative mx-auto flex justify-between`}>
        {/* {MENU_CONFIG.map((menu, index) => {
          return (
            <div key={index} className="flex flex-col flex-1 items-center cursor-pointer relative">
              {menu.icon}
              <p className="text-sm">{menu.label}</p>
            </div>
          );
        })} */}
      </nav>
    </div>
  );
};

export default BottomNavigationBarCp;
