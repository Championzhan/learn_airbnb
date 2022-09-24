import ScrollView from '@/base-ui/scroll-view';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo, useState } from 'react';
import { TabsWrapper } from './style';

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemClickHandle = (index, name) => {
    setCurrentIndex(index);

    // 点击切换按钮,切换数据
    tabClick(index, name);
  };

  return (
    <TabsWrapper>
      <ScrollView>
        {tabNames.map((name, index) => {
          return (
            <div
              className={classNames('item', { active: index === currentIndex })}
              key={name}
              onClick={(e) => itemClickHandle(index, name)}
            >
              {name}
            </div>
          );
        })}
      </ScrollView>
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array
};

export default SectionTabs;
