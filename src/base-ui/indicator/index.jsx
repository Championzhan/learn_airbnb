import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef } from 'react';
import { IndicatorWrapper } from './style';

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();

  // 位置移动
  useEffect(() => {
    // 1.获取selectIndex对应的item
    const selectItemEl = contentRef.current.children[selectIndex];
    // 获取当前元素的 offsetLeft
    const itemLeft = selectItemEl.offsetLeft;
    // 获取当前元素的宽度
    const itemWidth = selectItemEl.clientWidth;
    // 获取内容区的宽度
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;
    // 移动的距离  offsetLeft + itemWidth*0.5 - contentWidth*0.5
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;
    // 4.特殊情况的处理
    if (distance < 0) distance = 0; // 左侧的特殊情况处理
    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) distance = totalDistance; // 右边的特殊情况处理

    // 5.改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number
};

export default Indicator;
