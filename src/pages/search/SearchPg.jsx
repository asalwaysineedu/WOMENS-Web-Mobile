import React, { useEffect, useRef, useState } from 'react';
import { ROUTES } from 'utils/const/routes';
import { useNavigate } from 'react-router-dom';

import LayoutCp from 'components/body/layout/BodyLayoutCp';
import CustomIconFormCp from 'components/custom/icon/CustomIconFormCp';
import CustomSearchInputCp from 'components/custom/input/CustomSearchInputCp';
import CustomToggleSwitchCp from 'components/custom/button/CustomToggleSwitchCp';

import { FaCheck } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { MdHistory } from 'react-icons/md';
import { FaArrowLeft } from 'react-icons/fa6';
import { MdNavigateNext } from 'react-icons/md';
import { BsPatchExclamation } from 'react-icons/bs';

const SearchPg = () => {
  const navigator = useNavigate();
  const containerRef = useRef(null);

  const [isOn, setIsOn] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [removingId, setRemovingId] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [selectedCategoryId, setSelectedCategoryId] = useState(1); // 기본: 전체
  const [items, setItems] = useState([
    {
      id: 1,
      keyword: '건강이 안좋아요',
      createAt: '07.11',
    },
    {
      id: 2,
      keyword: '잠이 안오네요',
      createAt: '07.11',
    },
    {
      id: 3,
      keyword: '잠을 잤는데도 피곤해요',
      createAt: '07.11',
    },
    {
      id: 4,
      keyword: '출혈이 너무 오래가요',
      createAt: '07.11',
    },
    {
      id: 5,
      keyword: '왜 이럴까요?',
      createAt: '07.11',
    },
  ]);
  const [popBoardList, setPopBoardList] = useState([
    {
      id: 1,
      category: 'HEALTH',
      title: '요새 몸이 안좋네요.. 병원 좋은 곳 있을까요?',
      writer: 'lucas',
      createAt: '2025-07-09 12:23:00',
    },
    {
      id: 1,
      category: 'HEALTH',
      title: '저만 이런건가요?',
      writer: 'lucas',
      createAt: '2025-07-09 12:23:00',
    },
    {
      id: 1,
      category: 'HEALTH',
      title: '카제하야 인기 많네요....',
      writer: 'lucas',
      createAt: '2025-07-09 12:23:00',
    },
  ]);
  const [category, setCategory] = useState([
    { id: 1, title: '전체' },
    { id: 2, title: '건강' },
    { id: 3, title: '고민' },
    { id: 4, title: '증상' },
    { id: 5, title: '병원' },
    { id: 6, title: '임신' },
    { id: 7, title: '붓기' },
    { id: 8, title: '취미' },
    { id: 9, title: '고민' },
    { id: 10, title: '상담' },
    { id: 11, title: '다이어트' },
  ]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const selectedEl = container.querySelector(`#cat-${selectedCategoryId}`);
    if (selectedEl) {
      const { offsetLeft, offsetWidth } = selectedEl;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [selectedCategoryId]);

  const handleDelete = (id) => {
    // 삭제 애니메이션 시작
    setRemovingId(id);

    // 약간의 지연 후 실제 삭제
    setTimeout(() => {
      setItems((prev) => prev.filter((item) => item.id !== id));
      setRemovingId(null);
    }, 200); // transition 시간과 맞춰줌
  };

  return (
    <LayoutCp>
      <div className="pl-[0.5rem] pr-[0.5rem]">
        <div className="flex justify-center">
          <CustomIconFormCp>
            <FaArrowLeft className="text-gray-600" onClick={() => navigator(ROUTES.MAIN)} />
          </CustomIconFormCp>

          {/* 검색창 */}
          <CustomSearchInputCp keyword={keyword} setKeyword={setKeyword} items={items} setItems={setItems} />
        </div>

        <div className="relative -mx-4 px-2 border-b border-transparent">
          {/* 회색 기본 밑줄 */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E7EBEE] z-0" />

          {/* 카테고리 리스트 */}
          <ul
            ref={containerRef}
            className="relative z-10 flex flex-nowrap overflow-x-auto scroll-hide items-center gap-6 p-[1rem]"
          >
            {category.map((c) => {
              const isSelected = selectedCategoryId === c.id;
              return (
                <li
                  id={`cat-${c.id}`}
                  key={c.id}
                  onClick={() => setSelectedCategoryId(c.id)}
                  className={`relative cursor-pointer whitespace-nowrap text-sm transition-all ${
                    isSelected ? 'text-[#009ad7] font-semibold' : 'text-gray-500'
                  }`}
                >
                  {c.title}
                </li>
              );
            })}
            {/* indicator bar (파란 밑줄) */}
            <div
              className="absolute bottom-0 h-[2px] bg-[#009ad7] rounded-full transition-all duration-200 ease-in-out"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
              }}
            />
          </ul>
        </div>

        {/* 최근 검색어 섹션 */}
        <ul className="flex flex-wrap justify-between items-center p-0 m-0 mt-5 list-none">
          <li className="m-0 p-0 text-gray-600 font-semibold">최근 검색 내역</li>
          <li className="m-0 p-0 text-gray-600 text-sm">
            <button>전체 삭제</button>
          </li>
        </ul>

        {/* 최근 검색어 섹션 */}
        <div className="h-40">
          <ul className="p-0.5">
            {items?.length > 0 ? (
              items.slice(0, 4).map((item) => (
                <li
                  key={item.id}
                  className={`flex justify-between items-center text-sm mt-5 transition-all duration-300 ease-in-out ${
                    removingId === item.id ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MdHistory className="text-gray-400" />
                    <p className="text-gray-400">{item.keyword}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-gray-400 text-xs">{item.createAt}</p>
                    <IoClose className="cursor-pointer text-gray-400" onClick={() => handleDelete(item.id)} />
                  </div>
                </li>
              ))
            ) : (
              <li className="flex justify-center items-center text-sm text-gray-300 h-40 gap-2">
                <BsPatchExclamation />
                <span>최근 검색 내역이 없어요!</span>
              </li>
            )}
          </ul>
        </div>

        {/* 하단: 검색 기록 저장 */}
        <div className="text-gray-600 text-sm flex justify-end items-center gap-2 mt-5">
          <p>검색 기록 저장</p>
          <CustomToggleSwitchCp enabled={isOn} setEnabled={setIsOn} />
        </div>

        <div className="w-screen -mx-4 bg-gray-100 h-2 my-6" />

        {/* 인기글 */}
        <ul className="flex flex-warp justify-between items-center p-0 m-0 mt-5 list-none">
          <li className="m-0 p-0 text-gray-600 font-semibold">🗃️ 인기글 </li>
          <li className="flex flex-warp m-0 p-0 text-sm text-gray-400 font-semibold">
            더보기
            <MdNavigateNext />
          </li>
        </ul>

        <ul className="mt-3">
          {popBoardList.slice(0, 3)?.map((p, index) => {
            return (
              <li className="flex flex-warp justify-between items-center m-0 list-none pt-3 text-sm">
                <p>[건강] {p?.title}</p>
                <p>12:00</p>
              </li>
            );
          })}
        </ul>

        <div className="w-screen -mx-4 bg-gray-100 h-2 my-6" />
      </div>
    </LayoutCp>
  );
};

export default SearchPg;
