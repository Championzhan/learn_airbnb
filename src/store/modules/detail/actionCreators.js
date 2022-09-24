import * as actionTypes from './constants';

export const changeDetailInfoAction = (detailInfo) => ({
  type: actionTypes.CHANGE_DETAIL_INFO,
  detailInfo
});
