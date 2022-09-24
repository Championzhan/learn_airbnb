import Demo from '@/views/demo';
import React from 'react';
import { Navigate } from 'react-router-dom';

// 路由懒加载
const Home = React.lazy(() => import('@/views/home'));
const Entire = React.lazy(() => import('@/views/entire'));
const Detail = React.lazy(() => import('@/views/detail'));

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire />
  },
  {
    path: '/demo',
    element: <Demo />
  }
];

export default routes;