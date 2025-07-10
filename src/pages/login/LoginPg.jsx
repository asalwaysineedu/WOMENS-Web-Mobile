import React, { useEffect, useState } from 'react';

import LayoutCp from 'components/LayoutCp';
import LoginPageHeaderCp from 'components/header/LoginPageHeaderCp';
import OAuthLoginButtonCp from 'components/custom/button/OAuthLoginButtonCp';

import { today } from 'utils/date/moment';
import { AnimatePresence, motion } from 'framer-motion';

const LoginPg = () => {
  const _thisYear = today()?.split('-')?.[0];
  const _startText = [
    '내 리듬🎵을 기억하고 싶다면,',
    '내 몸이 하는 말을 듣고👂 싶다면,',
    '내 고민을 공유💬하고 싶다면,',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % _startText.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutCp header={<LoginPageHeaderCp />}>
      {/* 로그인 환영 문구 */}
      <div className="relative h-screen flex flex-col justify-between py-10">
        <div className="pt-20">
          <div className="overflow-hidden flex">
            <AnimatePresence mode="wait">
              <motion.h1
                key={_startText[index]}
                className="text-2xl font-semibold"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{
                  bounce: 1,
                  duration: 0.4,
                  ease: [0.1, 0.1, 0.2, 1.2],
                }}
              >
                {_startText[index]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <h1 className="pt-1 text-2xl font-semibold">함께 시작해 볼까요?</h1>
        </div>

        {/* 소셜 로그인 버튼 */}
        <div className="flex flex-wrap gap-4">
          <OAuthLoginButtonCp oauth={'KAKAO'} />
          <OAuthLoginButtonCp oauth={'NAVER'} />
          <OAuthLoginButtonCp oauth={'GOOGLE'} />
        </div>

        <div></div>

        {/* 저작권 문구 */}
        <div className="text-center">
          <p className="text-[12px] text-gray-400">Copyright © {_thisYear} All Rights Reserved.</p>
        </div>
      </div>
    </LayoutCp>
  );
};

export default LoginPg;
