import gstyRequest from '..';

export function getEntireRoomList(offset = 0, size = 20) {
  return gstyRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  });
}
