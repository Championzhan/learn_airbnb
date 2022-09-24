import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import React, { memo, useEffect, useRef, useState } from 'react';
import { ViewWrapper } from './style';

const ScrollView = memo((props) => {
  /** 定义内部的状态 */
  /** 左侧按钮是否显示 */
  const [showLeft, setShowLeft] = useState(false);
  /** 右侧按钮是否显示 */
  const [showRight, setShowRight] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  // 记录可滚动的距离
  const totalDistanceRef = useRef();

  const scrollContentRef = useRef();
  // 组件挂载完毕后,执行回调
  // 获取组件的可滚动的宽度
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clentWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clentWidth;
    // 右侧按钮是否可见
    setShowRight(totalDistance > 0);
    totalDistanceRef.current = totalDistance;
  }, [props.children]);

  /* 事件处理*/
  const leftClickHandle = () => {
    const newIndex = posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    // offsetLeft 是依据最近包含该元素的定位元素
    const currentOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${currentOffsetLeft}px)`;
    // 设置当前的滚动位置索引
    setPosIndex(newIndex);
    // 控制右侧按钮是否可见
    setShowRight(totalDistanceRef.current > currentOffsetLeft);
    setShowLeft(currentOffsetLeft > 0);
  };

  const rightClickHandle = () => {
    const newIndex = posIndex + 1;
    const newEl = scrollContentRef.current.children[newIndex];
    // offsetLeft 是依据最近包含该元素的定位元素
    const currentOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${currentOffsetLeft}px)`;
    // 设置当前的滚动位置索引
    setPosIndex(newIndex);
    // 控制右侧按钮是否可见
    setShowRight(totalDistanceRef.current > currentOffsetLeft);
    setShowLeft(currentOffsetLeft > 0);
  };

  return (
    <ViewWrapper>
      {showLeft && (
        <div className="control left" onClick={leftClickHandle}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={rightClickHandle}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
