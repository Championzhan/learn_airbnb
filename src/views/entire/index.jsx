import { fetchRoomListAction } from '@/store/modules/entire/actionCreators';
import { changeHeaderConfigAction } from '@/store/modules/main';
import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import EntireFilter from './entire-filter';
import EntirePagination from './entire-pagination';
import EntireRooms from './entire-rooms';
import { EntireWrapper } from './style';

const Entire = memo(() => {
  const dispatch = useDispatch();

  // 发送网络请求,获取数据
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }));
    dispatch(fetchRoomListAction());
  }, [dispatch]);

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;
