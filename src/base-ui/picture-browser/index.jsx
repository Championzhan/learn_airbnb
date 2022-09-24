import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';

import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { BrowserWrapper } from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import IconClose from '@/assets/svg/icon-close';
import Indicator from '../indicator';
import classNames from 'classnames';
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom';
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top';

const PictureBrowser = memo((props) => {
  // 定义内部的状态
  const [currentIndex, setCurrentIndex] = useState(0);
  const { pictureUrls, closeClick } = props;
  const [isNext, setIsNext] = useState(false);
  const [showList, setShowList] = useState(true);

  // 当图片浏览器显示时,隐藏滚动条
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const closeBtnClickHandle = () => {
    if (closeClick) closeClick();
  };

  const controlClickHandle = (isNext = true) => {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;

    setCurrentIndex(newIndex);

    setIsNext(isNext);
  };

  const toggleClickHandle = () => {
    setShowList(!showList);
  };

  const bottomItemClickHandle = (index) => {
    setIsNext(index > currentIndex);
    setCurrentIndex(index);
  };

  return (
    <BrowserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close-btn" onClick={(e) => closeBtnClickHandle()}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={(e) => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={(e) => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode="in-out">
            <CSSTransition classNames="pic" timeout={200} key={pictureUrls[currentIndex]}>
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{pictureUrls.length}:
              </span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => toggleClickHandle()}>
              <span>{showList ? '隐藏' : '显示'}照片列表</span>
              {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {pictureUrls.map((item, index) => {
                return (
                  <div
                    className={classNames('item', { active: index === currentIndex })}
                    key={item}
                    onClick={(e) => bottomItemClickHandle(index)}
                  >
                    <img src={item} alt="" />
                  </div>
                );
              })}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
};

export default PictureBrowser;
