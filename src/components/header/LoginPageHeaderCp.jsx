import React from 'react';
import { ROUTES } from 'utils/const/routes';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const LoginPageHeaderCp = ({}) => {
  const navigate = useNavigate();

  return (
    <>
      <FaAngleLeft onClick={() => navigate(ROUTES.MAIN)} />
      <p className="mx-auto text-lg font-bold">로그인</p>
    </>
  );
};

export default LoginPageHeaderCp;
