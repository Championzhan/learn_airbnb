import PropTypes from 'prop-types';
import React, { memo, useRef, useState } from 'react';
import { Rating } from '@mui/material';
import { Carousel } from 'antd';

import { RoomWrapper } from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props;
  const [selectIndex, setSelectIndex] = useState(0);

  const sliderRef = useRef();
  const controlClickHandle = (event, isRight = true) => {
    // 切片图片
    isRight ? sliderRef.current.next() : sliderRef.current.prev();
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1;
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0;
    setSelectIndex(newIndex);

    // 阻止事件冒泡
    event.stopPropagation();
  };

  /** 子元素的赋值 */
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );
  const swiperElement = (
    <div className="swiper">
      <div className="control">
        <div className="btn left" onClick={(e) => controlClickHandle(e, false)}>
          <IconArrowLeft width={30} height={30} />
        </div>
        <div className="btn right" onClick={(e) => controlClickHandle(e, true)}>
          <IconArrowRight width={30} height={30} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span className={classNames('dot', { active: selectIndex === index })}></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );

  const itemClickHandle = () => {
    if (itemClick) itemClick(itemData);
  };

  return (
    <RoomWrapper
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={itemWidth}
      onClick={(e) => itemClickHandle()}
    >
      <div className="inner">
        {itemData.picture_urls ? swiperElement : pictureElement}

        <div className="desc">{itemData.verify_info.messages.join(' · ')}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>

        <div className="bottom">
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: '12px', color: '#00848A', marginRight: '-1px' }}
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && <span className="extra">· {itemData.bottom_info.content}</span>}
        </div>
      </div>
    </RoomWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object
};

export default RoomItem;
