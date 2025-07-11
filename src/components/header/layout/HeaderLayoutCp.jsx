import React, { useContext, useEffect, useState } from 'react';

export const ScrollContext = React.createContext(null);

const HeaderLayoutCp = ({ children }) => {
  const FONT_SIZE = '1.2rem';
  const HEIGHT = 56;

  const scrollRef = useContext(ScrollContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!scrollRef?.current) return;

    const handleScroll = () => {
      setIsScrolled(scrollRef.current.scrollTop > 0);
    };

    scrollRef.current.addEventListener('scroll', handleScroll);
    return () => scrollRef.current.removeEventListener('scroll', handleScroll);
  }, [scrollRef]);

  const HEADER_STYLE = `fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between bg-white transition-shadow px-4 pt-2 ${isScrolled ? 'border border-[#E7EBEE] shadow-sm' : ''}`;

  return (
    <header>
      {isScrolled}
      <div
        className={HEADER_STYLE}
        style={{
          height: HEIGHT,
          fontSize: FONT_SIZE,
        }}
      >
        {children}
      </div>
    </header>
  );
};

export default HeaderLayoutCp;
