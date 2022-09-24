import React, { memo } from 'react';

import Pagination from '@mui/material/Pagination';
import { PaginationWrapper } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo(() => {
  const { totalCount, currentPage, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList
    }),
    shallowEqual
  );

  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  const totalPage = Math.ceil(totalCount / 20);

  /** 事件处理 */
  const dispath = useDispatch();
  const pageChangeHandle = (event, value) => {
    // 回到顶部
    window.scrollTo(0, 0);

    const newPage = value - 1;
    dispath(fetchRoomListAction(newPage));
  };

  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage} onChange={pageChangeHandle} />
          <div className="desc">
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;
