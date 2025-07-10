import React from 'react';
import { IMAGES_URL } from 'assets/images';

const OAuthLoginButtonCp = ({ oauth = '' }) => {
  const OAUTH_TYPE = {
    KAKAO: {
      type: 'KAKAO',
      text: '카카오로 시작하기',
      fontColor: 'text-black',
      backgroundColor: 'bg-[#FEE500]',
      imageUrl: 'kakao_logo.png',
    },
    NAVER: {
      type: 'NAVER',
      text: '네이버로 시작하기',
      fontColor: 'text-white',
      backgroundColor: 'bg-[#2DB400]',
      imageUrl: 'naver_logo.png',
    },
    GOOGLE: {
      type: 'GOOGLE',
      text: '구글로 시작하기',
      fontColor: 'text-black',
      backgroundColor: 'bg-[#FFFFFF]',
      imageUrl: 'google_logo.png',
    },
  };

  const _button_style = `flex flex-wrap items-center justify-center gap-3 rounded-lg w-full h-[48px] ${OAUTH_TYPE[oauth]?.backgroundColor} ${oauth === OAUTH_TYPE?.GOOGLE.type && 'border border-[#E0E0E0]'}`;

  return (
    <>
      <button className={_button_style}>
        <img alt="oauth_icon" src={`${IMAGES_URL}/${OAUTH_TYPE[oauth]?.imageUrl}`} className="w-[14px]" />
        <p className={`${OAUTH_TYPE[oauth]?.fontColor} text-sm font-bold`}>{OAUTH_TYPE[oauth]?.text}</p>
      </button>
    </>
  );
};

export default OAuthLoginButtonCp;
