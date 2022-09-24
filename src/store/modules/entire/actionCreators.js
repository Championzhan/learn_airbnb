import { getEntireRoomList } from '@/services/modules/entire';
import * as actionTypes from './constants';

export const changeCurrentPageAction = (currentPage) => {
  return { type: actionTypes.CHANGE_CURRENT_PAGE, currentPage };
};

export const changeRoomListAction = (roomList) => {
  return { type: actionTypes.CHANGE_ROOM_LIST, roomList };
};

export const changeTotalCountAction = (totalCount) => {
  return { type: actionTypes.CHANGE_TOTAL_COUNT, totalCount };
};

export const changeIsLoadingAction = (isLoading) => {
  return { type: actionTypes.CHANGE_IS_LOADING, isLoading };
};

export const fetchRoomListAction = (page = 0) => {
  return async (dispatch, getState) => {
    // 0.保存最新的页码数据
    dispatch(changeCurrentPageAction(page));
    // const state = getState();
    // 1.获取当前页码
    // const currentPage = state.entire.currentPage;
    // 2.发送网络请求,获取数据
    dispatch(changeIsLoadingAction(true));
    const res = await getEntireRoomList(page * 20);
    dispatch(changeIsLoadingAction(false));

    dispatch(changeRoomListAction(res.list));
    dispatch(changeTotalCountAction(res.totalCount));
  };
};
