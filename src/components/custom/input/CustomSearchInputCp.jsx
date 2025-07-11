import React, { useEffect, useState } from 'react';
import { FaRegClock } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const CustomSearchInputCp = ({ keyword, setKeyword, items, setItems }) => {
  const [placeholder, setPlaceholer] = useState('');
  const [focus, setFocus] = useState(false);

  return (
    <>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onFocus={(e) => setFocus(true)}
        onBlur={(e) => setFocus(false)}
        className="bg-gray-100 placeholder-gray-400 caret-[#89cff0] rounded-xl h-11 w-full ps-4 text-sm focus:outline-none focus:ring-0"
        placeholder="요즘 내 몸이 보내는 메시지, 같이 알아볼까요?"
      />
    </>
  );
};

export default CustomSearchInputCp;
