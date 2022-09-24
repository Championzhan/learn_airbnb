import RoomItem from '@/components/room-item';
import { changeDetailInfoAction } from '@/store/modules/detail/actionCreators';
import React, { memo, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoomsWrapper } from './style';

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
      isLoading: state.entire.isLoading
    }),
    shallowEqual
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemClickHandle = useCallback(
    (item) => {
      // 修改 detail 数据
      dispatch(changeDetailInfoAction(item));
      // 页面跳转
      navigate('/detail');
    },
    [navigate, dispatch]
  );

  return (
    <RoomsWrapper>
      <div className="title">{totalCount}多处住宿</div>
      <div className="list">
        {roomList.map((item) => {
          return <RoomItem itemData={item} key={item.id} itemWidth="20%" itemClick={itemClickHandle} />;
        })}
      </div>

      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default EntireRooms;
