import PropTypes from 'prop-types';
import React, { memo, useCallback, useState } from 'react';

import { SectionV2Wrapper } from './style';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionTabs from '@/components/section-tabs';
import SectionFooter from '@/components/section-footer';

const HomeSectionV2 = memo((props) => {
  // 从 props 中获取数据
  const { infoData } = props;

  const initialName = Object.keys(infoData.dest_list)[0];
  // 定义内部的 state
  // 注意 useState 中的初始化值只对组件第一次渲染时有效
  const [name, setName] = useState(initialName);
  // 数据转换
  const tabNames = infoData.dest_address?.map((item) => item.name);

  // 定义事件处理
  const tabClickHandle = useCallback((index, name) => {
    setName(name);
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.33%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
};

export default HomeSectionV2;
