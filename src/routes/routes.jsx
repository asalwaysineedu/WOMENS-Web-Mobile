import MainPg from '../pages/main/MainPg';
import SearchPg from 'pages/search/SearchPg';
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
