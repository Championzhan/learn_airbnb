import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData,
  getHomeLongForData,
  getHomePlusData
} from '@/services';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHomeDataAction = createAsyncThunk('fetchData', (payload, { dispatch, getState }) => {
  // 获取高性价比数据
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfoAaction(res));
  });
  // 获取高评分数据
  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreInfoAction(res));
  });
  // 获取折扣数据
  getHomeDiscountData().then((res) => {
    dispatch(changeDiscountInfoAction(res));
  });
  // 获取热门推荐
  getHomeHotRecommendData().then((res) => {
    dispatch(changeRecommendInfoAction(res));
  });
  // 获取想去数据
  getHomeLongForData().then((res) => {
    dispatch(changeLongForInfoAction(res));
  });

  // 获取Plus
  getHomePlusData().then((res) => {
    dispatch(changePlusInfoAction(res));
  });
});

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAaction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload;
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    }
  }
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload;
  //   }
  // }
});

export const {
  changeGoodPriceInfoAaction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction
} = homeSlice.actions;

export default homeSlice.reducer;
