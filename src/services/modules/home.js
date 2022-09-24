import gstyRequest from '../';

export function getHomeGoodPriceData() {
  return gstyRequest.get({
    url: '/home/goodprice'
  });
}

export function getHomeHighScoreData() {
  return gstyRequest.get({
    url: '/home/highscore'
  });
}

export function getHomeDiscountData() {
  return gstyRequest.get({
    url: '/home/discount'
  });
}

export function getHomeHotRecommendData() {
  return gstyRequest.get({
    url: '/home/hotrecommenddest'
  });
}

export function getHomeLongForData() {
  return gstyRequest.get({
    url: '/home/longfor'
  });
}

export function getHomePlusData() {
  return gstyRequest.get({
    url: '/home/plus'
  });
}
