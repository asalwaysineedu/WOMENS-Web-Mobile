import React from 'react';
import PrivateRoute from './PrivateRoute';
import { ROUTES, ROUTES_BIG_KEY } from 'utils/const/routes';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// 페이지 컴포넌트
import MainPg from '../pages/main/MainPg';
import LoginPg from 'pages/login/LoginPg';
import SearchPg from 'pages/search/SearchPg';

// 라우터 설정
const router = createBrowserRouter([
  // {
  //   path: ROUTES_BIG_KEY.BIG_KEY,
  //   element: <Navigate to={ROUTES.DASHBOARD} />,
  // },
  {
    path: '/',
    /* 인증을 하지 않아야만 접속가능 페이지 (로그인 성공 시, 해당페이지 접속 불가) */
    element: <PrivateRoute authRouter={false} />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <MainPg />,
      },
    ],
  },
  {
    path: '/search',
    /* 인증을 하지 않아야만 접속가능 페이지 (로그인 성공 시, 해당페이지 접속 불가) */
    element: <PrivateRoute authRouter={false} />,
    children: [
      {
        path: ROUTES.SEARCH,
        element: <SearchPg />,
      },
    ],
  },
  {
    path: '/login',
    /* 인증을 하지 않아야만 접속가능 페이지 (로그인 성공 시, 해당페이지 접속 불가) */
    element: <PrivateRoute authRouter={false} />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <LoginPg />,
      },
    ],
  },
  // {
  //   path: '/',
  //   /* 인증을 해야만 접속가능 페이지 (로그인후 accessToken이 브라우저에 저장되어 있는지 체크) */
  //   element: <PrivateRoute authRouter />,
  //   children: [
  //     /* 대시보드 */
  //     { path: ROUTES.DASHBOARD, element: <DashboardPg /> },

  //   ],
  // },
  {
    path: '*', // 모든 매칭되지 않는 경로를 404로 처리
    // element: <NotFoundPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
